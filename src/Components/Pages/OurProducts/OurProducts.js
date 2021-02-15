import 'styles/main.css';
import BeyondCRM from 'Components/Pages/OurProducts/BeyondCRM';
import Farm from 'Components/Pages/OurProducts/Farm';
import Tillage from 'Components/Pages/OurProducts/Tillage';
import Delivery from 'Components/Pages/OurProducts/Delivery';
import { UndrawProductTour } from 'react-undraw-illustrations';
import PageHeader from 'Components/Other/PageHeader';

export default function OurProducts() {
	return (
		<div className="page-padding">
			<PageHeader title="Our Products" undrawComponent={UndrawProductTour}/>
			<div className="flex flex-col items-center space-y-32">
				<div className="w-full md:w-4/5">
					<BeyondCRM />
				</div>
				<div className="w-full md:w-4/5">
					<Farm />
				</div>
				<div className="w-full md:w-4/5">
					<Delivery />
				</div>
				<div className="w-full md:w-4/5">
					<Tillage />
				</div>
			</div>
		</div >
	);
}
