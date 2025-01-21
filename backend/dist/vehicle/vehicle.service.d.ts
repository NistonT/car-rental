import { Vehicle } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { AddVehicleDto } from './dto/add.dto';
import { EditVehicleDto } from './dto/edit.dto';
export declare class VehicleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllVehicle(page?: number, pageSize?: number): Promise<Vehicle[]>;
    getIdVehicle(id: string): Promise<Vehicle>;
    addVehicle(dto: AddVehicleDto): Promise<Vehicle>;
    editVehicle(id: string, dto: EditVehicleDto): Promise<Vehicle>;
    deleteVehicle(id: string): Promise<Vehicle>;
}
