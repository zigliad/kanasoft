import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawOnTheWay } from 'react-undraw-illustrations';

export default function AboutUs() {
	return (
		<div className="p-16 mb-20">
			<PageHeader title="About Kanasoft" undrawComponent={UndrawOnTheWay}/>
		</div>
	);
}
