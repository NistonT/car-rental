"use client";
import { authAtom } from "@/app/jotai/auth.store";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LinkVehicle = () => {
	const pathname = usePathname();
	const [isAuth, setIsAuth] = useAtom(authAtom);
	return (
		isAuth &&
		(pathname === "/vehicle" ? (
			<Link
				href={"/"}
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			>
				Профиль
			</Link>
		) : (
			<Link
				href={"/vehicle"}
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			>
				Автотранспорт
			</Link>
		))
	);
};
