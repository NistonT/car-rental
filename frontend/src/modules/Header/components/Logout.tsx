"use client";

import { authAdminAtom, authAtom } from "@/app/jotai/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const Logout = () => {
	const [isAuthAdmin, setIsAuthAdmin] = useAtom(authAdminAtom);
	const [isAuth, setIsAuth] = useAtom(authAtom);
	const router = useRouter();
	const token_admin = Cookies.get("token_admin");
	const license = Cookies.get("license");

	const onLogout = () => {
		Cookies.remove("token");
		Cookies.remove("token_admin");
		setIsAuth(false);
		setIsAuthAdmin(false);
		router.push("/authorization");
	};

	return (
		(isAuth || isAuthAdmin || token_admin) && (
			<button
				onClick={onLogout}
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			>
				Выйти
			</button>
		)
	);
};
