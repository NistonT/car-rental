import Link from "next/link";

export const Authorization = () => {
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
					<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
						<h1 className='title-font font-medium text-3xl text-white'>
							Арендуйте. Езжайте. Наслаждайтесь.
						</h1>
						<p className='leading-relaxed mt-4'>
							Наш сервис предлагает широкий выбор авто для любых целей: от
							городских поездок до дальних путешествий. Быстрое оформление,
							доступные цены и круглосуточная поддержка. Ваш идеальный
							автомобиль — всего в паре кликов!"
						</p>
					</div>
					<div className='lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
						<h2 className='text-white text-lg font-medium title-font mb-5'>
							Авторизация
						</h2>
						<div className='relative mb-4'>
							<label
								htmlFor='full-name'
								className='leading-7 text-sm text-gray-400'
							>
								Логин
							</label>
							<input
								type='text'
								id='full-name'
								name='full-name'
								className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='email'
								className='leading-7 text-sm text-gray-400'
							>
								Пароль
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							/>
						</div>
						<button className='text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition-all'>
							Войти
						</button>
						<div className='flex justify-center mt-10'>
							<Link
								href={"/register"}
								className='text-green-400 hover:text-green-500 transition-colors font-medium border-b border-green-500'
							>
								Зарегистрироваться
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
