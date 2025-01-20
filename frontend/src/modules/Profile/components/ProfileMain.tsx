import { IUser } from "@/types/user.type";
import { ProfileData } from "./ProfileData";
import { ProfilePicture } from "./ProfilePicture";

type Props = {
	user: IUser | null;
};

export const ProfileMain = ({ user }: Props) => {
	return (
		<>
			<div className='w-1/3 p-8 flex flex-col '>
				<div className='flex flex-col bg-[#151b23] p-4 rounded-md'>
					<ProfilePicture avatar={user?.avatar} id={user?.id} />
					<ProfileData
						name={user?.name}
						surname={user?.surname}
						patronymic={user?.patronymic}
						email={user?.email}
						login={user?.login}
					/>
				</div>
			</div>
		</>
	);
};
