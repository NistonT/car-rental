import Link from "next/link";

export const FormLinkAuthorization = () => {
	return (
		<>
			<div>
				<Link
					href={"/authorization"}
					className='flex items-center text-green-500 rounded-md p-4 mb-4 transition-all'
				>
					<svg
						className='w-4 h-4 rotate-180'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 5l7 7-7 7'
						/>
					</svg>
					<span className='mr-1'>Перейти на страницу авторизации</span>
				</Link>
			</div>
		</>
	);
};
