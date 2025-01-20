"use client";
import { IUser } from "@/types/user.type";
import { authAtom } from "@atom/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkTokenProfileApi } from "./api/checkToken.api";
import { getUser } from "./api/getUser.api";
import { LicenseForm } from "./components/LicenseForm";
import { Loading } from "./components/Loading";
import { ProfileMain } from "./components/ProfileMain";

export const Profile = () => {
	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useAtom<boolean>(authAtom);

	useEffect(() => {
		const token = Cookies.get("token");

		if (!token) {
			console.log("У вас нет токена");
			redirect("/authorization");
		}
		checkTokenProfileApi(token)
			.then(response => {
				if (!response || !response.data || !response.data.sub) {
					console.error("Invalid response from checkTokenProfileApi", response);
					setLoading(false);
					router.push("/authorization");
				}
				getUser(response.data.sub)
					.then(userResponse => {
						setUser(userResponse?.data);
						setIsAuth(true);
						Cookies.set("isAuth", "true", { sameSite: "Strict" });
						setLoading(false);
					})
					.catch(getUserError => {
						console.error("Error in getUser", getUserError);
						setLoading(false);
						router.push("/authorization");
					});
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
				router.push("/authorization");
			});
	}, []);

	console.log(user);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='flex flex-col md:flex-row container mx-auto mb-10'>
					<ProfileMain user={user} />
					<LicenseForm user={user} />
				</div>
			)}
		</>
	);
};
