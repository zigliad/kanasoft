import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import News from "Components/Other/News";

export default function PressReleases() {
	return (
		<div className="page-padding">
			<PageHeader title="Press Releases" undraw="browser_stats" />
			<News />
		</div>
	);
}
