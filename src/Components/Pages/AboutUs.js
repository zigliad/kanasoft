import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawOnTheWay } from 'react-undraw-illustrations';
import { SECTIONS } from 'Config/about';

export default function AboutUs() {

	const data = SECTIONS.map((section, index) => {
		return (
			<div className="space-y-2" id={String(index)}>
				<p className="text-3xl md:text-4xl text-gray-800 font-medium">{section.title}</p>
				<p className="text-xl md:text-2xl text-gray-500 text-justify">{section.message}</p>
			</div>
		);
	})

	return (
		<div className="page-padding">
			<PageHeader title="About Kanasoft" undrawComponent={UndrawOnTheWay} />
			<div className="space-y-24 md:12 p-6 md:p-24 lg:p-36">
				{data}
			</div>
		</div>
	);
}
