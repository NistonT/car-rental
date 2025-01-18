export interface IUser {
	id: string;
	surname: string;
	name: string;
	patronymic: string;
	email: string;
	login: string;
	password: string;
	role: string;
	avatar?: string;
	license?: string;

	CreatedAt: Date;
	UpdatedAt: Date;
}
