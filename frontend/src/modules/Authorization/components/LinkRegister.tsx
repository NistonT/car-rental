import Link from "next/link";

export const LinkRegister = () => {
	return (
		<div className='flex justify-center mt-10'>
			<Link
				href={"/register"}
				className='text-green-400 hover:text-green-500 transition-colors font-medium border-b border-green-500'
			>
				Зарегистрироваться
			</Link>
		</div>
	);
};
