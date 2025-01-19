import Link from "next/link";
import { Logout } from "./components/Logout";

export const Header = () => {
	return (
		<>
			<header className='bg-gray-800 text-gray-100 py-2'>
				<div className='container mx-auto flex items-center justify-between px-4'>
					<Link href='/' className='flex items-center space-x-3'>
						<svg
							viewBox='0 0 100 100'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className=' text-white p-2 w-20 h-20 transition-all hover:text-green-500 stroke-green-500'
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

					<nav className='hidden md:flex items-center space-x-6'>
						<Logout />
					</nav>
				</div>
			</header>
		</>
	);
};
