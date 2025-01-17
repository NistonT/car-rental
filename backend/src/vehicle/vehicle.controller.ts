import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Vehicle } from '@prisma/client';
import { AddVehicleDto } from './dto/add.dto';
import { EditVehicleDto } from './dto/edit.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async getAllVehicle(): Promise<Vehicle[]> {
    return await this.vehicleService.getAllVehicle();
  }

  @Get(':id')
  async getIdVehicle(@Param('id') id: string): Promise<Vehicle> {
    return await this.vehicleService.getIdVehicle(id);
  }

  @Post()
  async addVehicle(@Body() dto: AddVehicleDto): Promise<Vehicle> {
    return await this.vehicleService.addVehicle(dto);
  }

  @Put(':id')
  async editVehicle(
    @Param('id') id: string,
    @Body() dto: EditVehicleDto,
  ): Promise<Vehicle> {
    return await this.vehicleService.editVehicle(id, dto);
  }

  @Delete(':id')
  async deleteVehicle(@Param('id') id: string): Promise<Vehicle> {
    return await this.vehicleService.deleteVehicle(id);
  }
}
