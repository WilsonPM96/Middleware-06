import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";
const fs = require('fs');

@Injectable()
export class NivelLogMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction | Promise<MiddlewareFunction> {
        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                header: request.headers,
            };

            switch(request.params['nivelLog']){
                case 'archivo': //ESCRIBIR AL ARCHIVO
                    console.log('archivo');
                    this.escribirArchivo('logs.txt', JSON.stringify(respuesta));
                    break;
                case 'consola':   //SOLO MOSTRAR CONSOLA
                    console.log(respuesta);
                    break;
                case 'todo':   //ESCRIBIR EL ARCHIVO Y MOSTRAR EN CONSOLA
                    console.log('todo');
                    this.escribirArchivo('logs.txt', JSON.stringify(respuesta));
                    console.log(respuesta);
                    break;
                default:
                    console.log(respuesta);
                    break;
            }
            next();
        }
    }

    escribirArchivo(nombre: string, datos: string){
        fs.appendFile(__dirname + '/logs/' + nombre , datos + '\n\n', 'utf-8', (err) => {
            if (err)
                throw err;
            console.log('Arhivo guardado');
        });
    }
}
