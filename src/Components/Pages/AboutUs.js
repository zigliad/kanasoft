import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import { SECTIONS } from "Config/about";

export default function AboutUs() {
	const data = SECTIONS.map((section, index) => {
		return (
			<div className="space-y-2" id={String(index)}>
				<p className="gradient-title">{section.title}</p>
				<p className="info-text">{section.message}</p>
			</div>
		);
	});

	return (
		<div className="page-padding">
			<PageHeader title="About Cannasoft" undraw="high_five" />
			<div className="space-y-24 px-2 md:px-24 lg:px-36">{data}</div>
		</div>
	);
}
