import { MainForm } from "./components/MainForm";

export const Register = () => {
	return (
		<>
			<section className='bg-gray-900 text-gray-100 py-16 relative'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h1 className='text-3xl font-semibold mb-4'>Регистрация</h1>
						<p className='text-gray-300 leading-relaxed'>
							Пожалуйста, заполните форму ниже, чтобы зарегистрироваться.
						</p>
					</div>
					<MainForm />
				</div>
			</section>
		</>
	);
};
