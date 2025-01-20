type Props = {
	surname: string | undefined;
	name: string | undefined;
	patronymic: string | undefined;
	login: string | undefined;
	email: string | undefined;
};

export const ProfileData = ({
	surname,
	name,
	patronymic,
	login,
	email,
}: Props) => {
	return (
		<>
			<div>
				<div className='font-semibold text-4xl text-green-100 mb-4 text-shadow-md font-sans'>
					{surname}
				</div>
				<div className='flex gap-2 items-center mb-4'>
					<span className='text-3xl text-white font-medium font-sans'>
						{name}
					</span>
					<span className='text-3xl text-white font-medium font-sans'>
						{patronymic}
					</span>
				</div>
				<div className='text-3xl text-white font-medium font-sans'>{login}</div>
				<div className='text-2xl text-white font-medium font-sans'>{email}</div>
			</div>
		</>
	);
};
