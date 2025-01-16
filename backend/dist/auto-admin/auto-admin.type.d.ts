export interface IAdmin {
    id: string;
    surname: string;
    name: string;
    patronymic: string;
    email: string;
    login: string;
    role: string;
    avatar: string | null;
    license: string | null;
    CreatedAt: Date;
    UpdatedAt: Date;
}
