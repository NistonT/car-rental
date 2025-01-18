export interface IRegisterUser {
	name: string;
	surname: string;
	patronymic: string;
	email: string;
	login: string;
	password: string;
	password_confirm?: string;
	isConfirm: boolean;
}
