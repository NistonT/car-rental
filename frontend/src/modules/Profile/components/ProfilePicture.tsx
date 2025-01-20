import noAvatar from "@/public/image/noAvatar.png";
import Image from "next/image";
import { useRef } from "react";
import { uploadPictureApi } from "../api/uploadPicture";

type Props = {
	avatar: string | undefined | null;
	id: string | undefined | null;
	// fileInputRef: RefObject<HTMLInputElement>;
	// handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	// handleButtonClick: () => void;
};

export const ProfilePicture = ({
	avatar,
	id,
}: // fileInputRef,
// handleFileChange,
// handleButtonClick,
Props) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) {
			console.error("Нету файла");
			return;
		}
		if (!id) {
			console.error("Нету идентификатора пользователя");
			return;
		}

		uploadPictureApi(id, file);
		location.reload();
	};
	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className='flex justify-center relative'>
			<div className='w-[300px] h-[300px] overflow-hidden rounded-full relative'>
				{avatar ? (
					<Image
						src={avatar}
						alt={"avatar"}
						className='rounded-full mb-4 object-cover w-full h-full'
						fill
						style={{ objectFit: "cover" }}
					/>
				) : (
					<Image
						src={noAvatar}
						alt={"avatar"}
						className='rounded-full  mb-4 object-cover w-full h-full'
						fill
						style={{ objectFit: "cover" }}
					/>
				)}
			</div>
			<div className='absolute bottom-14 right-14 flex items-center justify-center'>
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
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-all'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12 4V20M4 12H20'
							stroke='#000000'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
