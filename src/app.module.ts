import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NivelLogMiddleware} from "./nivel-log.middleware";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {CookieController} from "./cookie.controller";
import {CookieMiddleware} from "./cookie.middleware";

@Module({
  imports: [],
  controllers: [AppController, CookieController],
  providers: [ AppService ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
        .apply(NivelLogMiddleware)
        .forRoutes('/Log/:nivelLog')  //ruta del log al cual accederemos
        .apply(CookieMiddleware)
        .forRoutes(CookieController)

  }

}
