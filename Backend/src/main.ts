// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from './interceptors/bigint.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 1. Habilitar CORS para permitir peticiones desde el frontend
  app.enableCors({
    origin: 'http://localhost:5173', //  URL del frontend
  });

  // 2. Habilitar el servicio de archivos estáticos con un prefijo
  // Esto hace que los archivos en la carpeta 'uploads' sean accesibles desde la URL '/uploads'
  // Ejemplo: http://localhost:3000/uploads/nombre-de-la-imagen.png
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // 3. Aplicar un ValidationPipe globalmente para validar y transformar los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remueve propiedades que no están en el DTO
    forbidNonWhitelisted: true, // Lanza un error en caso que se tengan el body atributos o propiedades que no esten definidas en el DTO
    transform: true, // Transforma o convierte los tipos del body automaticamente a los tipos de datos del DTO
    transformOptions: {
      enableImplicitConversion: true, // Convierte automáticamente strings a numbers, etc.
    },
  }));

  // 4. Aplicar el interceptor global para manejar la serialización de BigInt
  app.useGlobalInterceptors(new BigIntInterceptor());

  // Iniciar la aplicación en el puerto 3000
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();