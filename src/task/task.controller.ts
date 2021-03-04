import { Controller, Get, Post } from '@nestjs/common';
import { Task } from './schema/task.schema';

import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll();
  }

  @Post()
  async create(): Promise<Task> {
    return await this.taskService.create();
  }
}
