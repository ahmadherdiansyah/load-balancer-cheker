import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/http-transform.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new TransformInterceptor(),
   );
 
  await app.listen(3000,'0.0.0.0');
}
bootstrap();
