import { Vehicle } from '@prisma/client';
import { AddVehicleDto } from './dto/add.dto';
import { EditVehicleDto } from './dto/edit.dto';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    getAllVehicle(page: number, pageSize: number): Promise<Vehicle[]>;
    getIdVehicle(id: string): Promise<Vehicle>;
    addVehicle(dto: AddVehicleDto): Promise<Vehicle>;
    editVehicle(id: string, dto: EditVehicleDto): Promise<Vehicle>;
    deleteVehicle(id: string): Promise<Vehicle>;
}
