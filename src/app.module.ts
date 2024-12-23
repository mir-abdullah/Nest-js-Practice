/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, UserModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
