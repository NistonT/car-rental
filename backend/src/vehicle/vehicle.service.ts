import { Injectable } from '@nestjs/common';
import { Vehicle } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddVehicleDto } from './dto/add.dto';
import { EditVehicleDto } from './dto/edit.dto';

@Injectable()
export class VehicleService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllVehicle(): Promise<Vehicle[]> {
    return await this.prisma.vehicle.findMany({});
  }

  async getIdVehicle(id: string): Promise<Vehicle> {
    return await this.prisma.vehicle.findUnique({ where: { id } });
  }

  async addVehicle(dto: AddVehicleDto): Promise<Vehicle> {
    return await this.prisma.vehicle.create({
      data: {
        ...dto,
      },
    });
  }

  async editVehicle(id: string, dto: EditVehicleDto): Promise<Vehicle> {
    return await this.prisma.vehicle.update({
      where: { id },
      data: { ...dto },
    });
  }

  async deleteVehicle(id: string): Promise<Vehicle> {
    return await this.prisma.vehicle.delete({
      where: { id },
    });
  }
}
