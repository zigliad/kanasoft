import 'styles/main.css';
import BeyondCRM from 'Components/Pages/OurProducts/BeyondCRM';
import Farm from 'Components/Pages/OurProducts/Farm';
import Tillage from 'Components/Pages/OurProducts/Tillage';
import Delivery from 'Components/Pages/OurProducts/Delivery';
import PageHeader from 'Components/Other/PageHeader';
import ProductHeader from 'Components/Other/ProductHeader';

export default function OurProducts() {
	return (
		<div>
			<div className="page-padding">
				<PageHeader title="Our Products" undraw="product_tour" />
			</div >
			<div className="page-padding md:px-32 lg:px-64 bg-gray-200 dark:bg-gray-600">
				<ProductHeader title="Beyond CRM" undraw="programming" />
				<BeyondCRM />
			</div>
			<div className="page-padding md:px-32 lg:px-64">
				<ProductHeader title="Cannabis Farm" undraw="science" opposite />
				<Farm />
			</div>
			<div className="page-padding md:px-32 lg:px-64 bg-gray-200 dark:bg-gray-600">
				<ProductHeader title="Delivery" undraw="on_the_way" />
				<Delivery />
			</div>
			<div className="page-padding md:px-32 lg:px-64">
				<ProductHeader title="Our Knowledge" undraw="book_lover" opposite />
				<Tillage />
			</div>
		</div>
	);
}
