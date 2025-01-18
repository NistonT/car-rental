export const FormButton = () => {
	return (
		<div className='w-full px-2'>
			<input
				type='submit'
				className='flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition-all'
				value={"Регистрация"}
			/>
		</div>
	);
};
