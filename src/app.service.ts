import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return '<h1 align="center">Wilson Ramos EPN</h1>';
  }
}
