"use client";
import { authAdminAtom } from "@/app/jotai/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { adminAuth } from "./constants";

export const AdminAuthPanel = () => {
	const { register, handleSubmit } = useForm();
	const [isAuthAdmin, setIsAuthAdmin] = useAtom(authAdminAtom);
	const router = useRouter();

	const onSubmit = (data: any) => {
		if (data.login === adminAuth.login && data.password && adminAuth.password) {
			setIsAuthAdmin(true);
			Cookies.set("token_admin", `${data.login}${data.password}`, {
				path: "/",
				expires: 1,
				sameSite: "strict",
				secure: process.env.NODE_ENV === "production",
			});

			router.push("/admin");
		}
	};

	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=' bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-1/3 mt-10 md:mt-0 mx-auto'
				>
					<h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
						Вход в админ панель
					</h2>
					<div className='relative mb-4'>
						<label htmlFor='login' className='leading-7 text-sm text-gray-600'>
							Логин
						</label>
						<input
							{...register("login", { required: true })}
							type='text'
							id='login'
							className='w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='password'
							className='leading-7 text-sm text-gray-600'
						>
							Пароль
						</label>
						<input
							{...register("password", { required: true })}
							type='password'
							id='password'
							className='w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<button className='text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg'>
						Войти
					</button>
				</form>
			</div>
		</section>
	);
};
