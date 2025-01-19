type Props = {
	messageError: string | null;
};

export const FormMessageError = ({ messageError }: Props) => {
	return (
		<>
			<div className='flex justify-center text-center w-full mt-4 mb-4 flex-col transition-all'>
				<div className='flex items-center bg-green-100 text-red-800 rounded-md p-4 mb-4'>
					<svg
						className='w-5 h-5 mr-2 text-red-500'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
					<span>{messageError}</span>
				</div>
			</div>
		</>
	);
};
