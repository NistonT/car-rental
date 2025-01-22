"use client";
import { authAdminAtom } from "@/app/jotai/auth.store";
import { useAtomValue } from "jotai";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { AddVehicle } from "./components/AddVehicle";
import { BookingUsers } from "./components/BookingUsers";

export const AdminPanel = () => {
	const isAuthAdmin = useAtomValue(authAdminAtom);

	useEffect(() => {
		const token = Cookies.get("token_admin");
		if (!token) {
			redirect("/admin/auth");
		}
	}, []);

	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4'>
						<AddVehicle />
						<BookingUsers />
					</div>
				</div>
			</section>
		</>
	);
};
