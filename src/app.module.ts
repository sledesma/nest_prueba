import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://sledesma:cleonitro@clasemongo.djmwo.mongodb.net/tareas_db?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
