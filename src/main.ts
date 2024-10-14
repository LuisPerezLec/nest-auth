import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync('./secrets/cert.key'),
  cert: fs.readFileSync('./secrets/cert.crt'),
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  app.use( cookieParser() );

  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true
  });

  await app.listen(8000);
}
bootstrap();
