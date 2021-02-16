import 'styles/main.css';
import BeyondCRM from 'Components/Pages/OurProducts/BeyondCRM';
import Farm from 'Components/Pages/OurProducts/Farm';
import Tillage from 'Components/Pages/OurProducts/Tillage';
import Delivery from 'Components/Pages/OurProducts/Delivery';
import { UndrawProductTour } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';
import ProductHeader from 'Components/Other/ProductHeader';
import { UndrawFriendship } from 'react-undraw-illustrations';
import { UndrawOnTheWay } from 'react-undraw-illustrations';
import { UndrawBookLover } from 'react-undraw-illustrations';
import { UndrawProgramming } from 'react-undraw-illustrations';
import { UndrawScience } from 'react-undraw-illustrations';

export default function OurProducts() {
	return (
		<div>
			<div className="page-padding">
				<PageHeader title="Our Products" undrawComponent={UndrawProductTour} />
			</div >
			<div className="page-padding md:px-32 lg:px-64 bg-gray-200 dark:bg-gray-600">
				<ProductHeader title="Beyond CRM" undrawComponent={UndrawProgramming} />
				<BeyondCRM />
			</div>
			<div className="page-padding md:px-32 lg:px-64">
				<ProductHeader title="Cannabis Farm" undrawComponent={UndrawScience} opposite />
				<Farm />
			</div>
			<div className="page-padding md:px-32 lg:px-64 bg-gray-200 dark:bg-gray-600">
				<ProductHeader title="Delivery" undrawComponent={UndrawOnTheWay} />
				<Delivery />
			</div>
			<div className="page-padding md:px-32 lg:px-64">
				<ProductHeader title="Our Knowledge" undrawComponent={UndrawBookLover} opposite />
				<Tillage />
			</div>
		</div>
	);
}
