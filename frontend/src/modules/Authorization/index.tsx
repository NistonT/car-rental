import { FormAuthorization } from "./components/FormAuthorization";
import { MainText } from "./components/MainText";

export const Authorization = () => {
	return (
		<>
			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
					<MainText />
					<FormAuthorization />
				</div>
			</section>
		</>
	);
};
