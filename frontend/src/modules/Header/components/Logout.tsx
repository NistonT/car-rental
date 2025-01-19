"use client";

import { authAtom } from "@/app/jotai/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export const Logout = () => {
	const [isAuth, setIsAuth] = useAtom(authAtom);

	const onLogout = () => {
		Cookies.remove("token");
		setIsAuth(false);
		redirect("/authorization");
	};

	return (
		isAuth && (
			<button
				onClick={onLogout}
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			>
				Выйти
			</button>
		)
	);
};
