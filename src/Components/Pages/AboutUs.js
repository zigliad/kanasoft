import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawHighFive } from 'react-undraw-illustrations';
import { SECTIONS } from 'Config/about';

export default function AboutUs() {

	const data = SECTIONS.map((section, index) => {
		return (
			<div className="space-y-2" id={String(index)}>
				<p className="text-4xl md:text-5xl text-gradient bg-gradient-to-r from-ks-purple to-ks-gradient-purple font-bold inline-block">{section.title}</p>
				<p className="text-2xl md:text-2xl text-gray-700 font-medium text-justify leading-relaxed">{section.message}</p>
			</div>
		);
	})

	return (
		<div className="page-padding">
			<PageHeader title="About Kanasoft" undrawComponent={UndrawHighFive} />
			<div className="space-y-24 px-6 md:px-24 lg:px-36">
				{data}
			</div>
		</div>
	);
}
