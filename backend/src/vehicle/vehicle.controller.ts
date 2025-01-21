import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Vehicle } from '@prisma/client';
import { AddVehicleDto } from './dto/add.dto';
import { EditVehicleDto } from './dto/edit.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  // Вывод автотранспорта
  @Get()
  async getAllVehicle(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<Vehicle[]> {
    return await this.vehicleService.getAllVehicle(page, pageSize);
  }

  // Вывод автотранспорта по идентификатору
  @Get(':id')
  async getIdVehicle(@Param('id') id: string): Promise<Vehicle> {
    return await this.vehicleService.getIdVehicle(id);
  }

  // Добавление автотранспорта
  @Post()
  async addVehicle(@Body() dto: AddVehicleDto): Promise<Vehicle> {
    return await this.vehicleService.addVehicle(dto);
  }

  // Редактирование автотранспорта
  @Put(':id')
  async editVehicle(
    @Param('id') id: string,
    @Body() dto: EditVehicleDto,
  ): Promise<Vehicle> {
    return await this.vehicleService.editVehicle(id, dto);
  }

  // Удаление автотранспорта
  @Delete(':id')
  async deleteVehicle(@Param('id') id: string): Promise<Vehicle> {
    return await this.vehicleService.deleteVehicle(id);
  }
}
