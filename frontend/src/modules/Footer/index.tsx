import Link from "next/link";

export const Footer = () => {
	return (
		<footer className='text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<Link href='/' className='flex items-center space-x-3'>
					<svg
						viewBox='0 0 100 100'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className=' text-white hover:text-green-500 transition-all p-2 w-20 h-20 stroke-green-500'
					>
						<circle
							cx='50'
							cy='50'
							r='40'
							stroke='currentColor'
							strokeWidth='4'
						/>
						<path
							d='M50 20L70 40L50 60'
							stroke='currentColor'
							strokeWidth='4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M50 80L30 60L50 40'
							stroke='currentColor'
							strokeWidth='4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>

					<span className='text-xl font-semibold whitespace-nowrap'>
						Прокат
						<span className='text-green-400 ml-1'>Авто</span>
					</span>
				</Link>
				<p className='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
					© 2025 NistonT —
					<a
						href='https://github.com/NistonT'
						className='text-gray-500 ml-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						@niston
					</a>
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'></span>
			</div>
		</footer>
	);
};
