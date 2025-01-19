"use client";
import { IUser } from "@/types/user.type";
import { authAtom } from "@atom/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { checkTokenProfileApi } from "./api/checkToken.api";
import { getUser } from "./api/getUser.api";

export const Profile = () => {
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
					redirect("/authorization");
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
						redirect("/authorization");
					});
			})
			.catch(error => {
				console.error(error);
				setLoading(false);
				redirect("/authorization");
			});
	}, []);

	return (
		<>
			<div>{user?.name}</div>
		</>
	);
};
