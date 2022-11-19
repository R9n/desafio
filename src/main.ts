import { config } from 'dotenv';
config();
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DEFAULT_APP_PORT } from './configs/constants';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Films API')
    .setDescription('API made to get films from Studio Ghibli API')
    .setVersion('1.0.0')
    .addTag('films')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(DEFAULT_APP_PORT);
}
bootstrap();
