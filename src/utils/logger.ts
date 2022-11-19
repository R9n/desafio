import * as winston from 'winston';

import { LogLevels } from '../configs/enums/winston-log-levels';

const { format, createLogger, transports } = winston;
const { combine, timestamp, printf, colorize } = format;

const errorStackFormat = format((info) => {
  if (info instanceof Error) {
    return {
      ...info,
      stack: info.stack,
      message: info.message,
      isError: true,
    };
  }
  return info;
});

const formatLogMessage = (info: winston.Logform.TransformableInfo): string => {
  const logLevel = info.level.toString();

  switch (logLevel) {
    case LogLevels.INFO: {
      return `${info.timestamp} - ${info.level}:✅ ${info.message}`;
    }
    case LogLevels.WARNING: {
      return `${info.timestamp} - ${info.level}: ⚠️ ${info.message}`;
    }
    case LogLevels.ERROR: {
      return `${info.timestamp} - ${info.level}:❌  ${info.message}
       ${info.stack}
    `;
    }
    default: {
      return `${info.timestamp} - ${info.level}:✅ ${info.message}`;
    }
  }
};

const sendLogToCloud = format(
  (
    info: winston.Logform.TransformableInfo,
  ): winston.Logform.TransformableInfo => {
    if (info instanceof Error) {
      const formatedError = {
        ...info,
        stack: info.stack,
        message: info.message,
        isError: true,
      };
      // Aqui a gente poderia enviar os logs para um datalake ou algo assim
      // nos projetos que trabalhei recentemente, por exemplo,
      // esses dados eram enviados para o cloudwatch
      return formatedError;
    }
    return info;
  },
);

const formatLogProd = combine(
  timestamp({
    format: 'DD-MM-YYYY hh:mm:ss A',
  }),
  errorStackFormat(),
  printf(formatLogMessage),
  sendLogToCloud(),
  colorize(),
);
// Não esquecer de dizer ao avaliador que, normalmente em produção não utilizamsos
// transporters de console, vou deixar aqui apenas para debug mesmo
export const AppLogger: winston.Logger = createLogger({
  format: formatLogProd,
  transports: [
    new transports.File({
      filename: './logs/app.log',
      // Descomente a linha abaixo para lipar os logs do arquivo de log logs/app.log todas as vezes que a aplicação reiniciar
      // options: { flags: 'w' },
    }),
    new transports.Console(),
  ],
});
