"use client";
import noAvatar from "@/public/image/noAvatar.png";
import { IUser } from "@/types/user.type";
import { authAtom } from "@atom/auth.store";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { checkTokenProfileApi } from "./api/checkToken.api";
import { getUser } from "./api/getUser.api";

export const Profile = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useAtom<boolean>(authAtom);
	const fileInputRef = useRef<HTMLInputElement>(null);

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

	console.log(user);

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			console.log("Selected file:", file);
		}
	};

	return (
		<>
			<div className='flex flex-col md:flex-row container mx-auto'>
				<div className='w-1/3 p-8 flex flex-col '>
					<div className='flex flex-col  '>
						<div className='flex justify-center mb-4 relative'>
							{user?.avatar ? (
								<Image
									src={noAvatar}
									alt={"avatar"}
									width={300}
									height={300}
									className='rounded-full  mb-4 '
								/>
							) : (
								<Image
									src={noAvatar}
									alt={"avatar"}
									width={300}
									height={300}
									className='rounded-full  mb-4'
								/>
							)}
							<div className='absolute bottom-0 right-0 flex items-center justify-center'>
								<input
									type='file'
									ref={fileInputRef}
									style={{ display: "none" }}
									onChange={handleFileChange}
									accept='image/*'
								/>
								<button
									type='button'
									onClick={handleButtonClick}
									className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'
								>
									Загрузить фото
								</button>
							</div>
						</div>
						<div className='font-semibold text-xl text-gray-800 mb-2'>
							{user?.login}
						</div>
						<div className='flex items-center text-white space-x-2 mb-2 text-3xl'>
							<span>{user?.surname}</span>
							<span>{user?.name}</span>
						</div>
						<div className='text-gray-700 mb-2'>{user?.patronymic}</div>
						<div className='text-gray-700 mb-2'>{user?.email}</div>
					</div>
				</div>
				<div className='w-2/3 bg-gray-100 p-8'></div>
			</div>
		</>
	);
};
