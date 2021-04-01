import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawBrowserStats } from 'react-undraw-illustrations';
import News from 'Components/Other/News';
import { UndrawNews } from 'react-undraw-illustrations';

export default function PressReleases() {
	return (
		<div className="page-padding">
			<PageHeader title="Press Releases" undrawComponent={UndrawBrowserStats} />
			<News />
		</div>
	);
}
