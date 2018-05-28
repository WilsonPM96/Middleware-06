import {Controller, Get, MiddlewareConsumer, NestModule, Req, Res} from "@nestjs/common";


@Controller('Cookie')
export class CookieController{
    nombre='Wilson';
    valor= '21';
    @Get('crearCookie')
    crear(@Req() request, @Res() response){
        const parametros = {
            nombreCookie: this.nombre,
            valorCookie:  this.valor,
        };
        response.cookie(parametros.nombreCookie, parametros.valorCookie);
        return response.send(parametros)
    }

    @Get('revisar/:nombreCookie')
    revisar(@Req() request, @Res() response){

        return response.send('<h1 align="center">Cookie</h1>')
    }


}