import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

@Injectable()
export class CookieMiddleware implements NestMiddleware{
    resolve(): MiddlewareFunction {
        return (request, response, next)=>{
            const nombreCookie = request.params.nombreCookie;
            const existeCookie = request.cookies[nombreCookie];

            if(existeCookie){
                console.log('****COOKIE: EN CACHE****');
            }else{
                console.log('****COOKIE: NO EN CACHE****');

            }
            next();
        };


    }

}