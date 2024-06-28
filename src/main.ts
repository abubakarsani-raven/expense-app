import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Objects not in the DTO will be whitelisted
      transform: true, // Tell nest js to activate class transformers
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}

bootstrap();

// Class Transformer has to do with a response object and changing ti to remove unwanted/sensitive data
// class Validator for creating and maintaining DTO object for the incoming request body or parameter
