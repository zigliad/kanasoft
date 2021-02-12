import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawOnTheWay } from 'react-undraw-illustrations';
import { SECTIONS } from 'Config/about';

export default function AboutUs() {

	const data = SECTIONS.map((section, index) => {
		return (
			<div className="space-y-2">
				<p className="text-4xl text-gray-800 font-medium">{section.title}</p>
				<p className="text-2xl text-gray-500">{section.message}</p>
			</div>
		);
	})

	return (
		<div className="p-16 mb-20">
			<PageHeader title="About Kanasoft" undrawComponent={UndrawOnTheWay} />
			<div className="space-y-24 p-12 md:p-24 lg:p-36">
				{data}
			</div>
		</div>
	);
}
