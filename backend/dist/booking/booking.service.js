"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BookingService = class BookingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registerBooking(dto) {
        console.log(dto);
        const user = await this.prisma.user.findUnique({
            where: { id: dto.user_id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Пользователь с таким ${dto.user_id} не найден`);
        }
        const vehicle = await this.prisma.vehicle.findUnique({
            where: { id: dto.vehicle_id },
        });
        if (!vehicle) {
            throw new common_1.NotFoundException(`Транспорт с таким ${dto.vehicle_id} не найден`);
        }
        return await this.prisma.booking.create({
            data: {
                user_id: user.id,
                vehicle_id: vehicle.id,
                booking_date: dto.date,
                duration: dto.duration,
            },
        });
    }
    async getBookingUser(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return await this.prisma.booking.findMany({ where: { user_id: user.id } });
    }
    async getAllBooking() {
        return await this.prisma.booking.findMany();
    }
    async deleteBooking(id) {
        return await this.prisma.booking.delete({ where: { id } });
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
//# sourceMappingURL=booking.service.js.map