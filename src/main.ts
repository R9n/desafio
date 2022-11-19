import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DEFAULT_APP_PORT } from './config/constants';
import { config } from 'dotenv';
config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Movies API')
    .setDescription('API made to get movies from api de fulano ')
    .setVersion('1.0.0')
    .addTag('movies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(DEFAULT_APP_PORT);
}
bootstrap();
