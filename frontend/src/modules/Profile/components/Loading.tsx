export const Loading = () => {
	return (
		<>
			<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center text-gray-800 bg-gray-800 z-50'>
				<span
					className='loading loading-dots loading-2xl text-white'
					style={{ transform: "scale(2)" }}
				></span>
			</div>
		</>
	);
};
