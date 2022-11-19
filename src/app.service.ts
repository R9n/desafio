import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { loadGhibliDATA } from './scripts/database-loader';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  async onModuleInit(): Promise<void> {
    await loadGhibliDATA(this.httpService);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
