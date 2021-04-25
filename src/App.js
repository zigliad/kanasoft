import Routing from "Components/Routing/Routing";
import 'styles/main.css';
import { TRACKING_ID } from "Config/config";
import ReactGA from 'react-ga';

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	return (
		<div className="dark-">
			<div className="h-screen bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
				<div className="bg-gray-100 dark:bg-gray-700">
					<Routing />
				</div>
			</div>
		</div>
	);
}

export default App;
