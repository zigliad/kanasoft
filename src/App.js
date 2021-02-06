import Routing from "Components/Routing/Routing";
import 'styles/main.css';

function App() {
	return (
		<div className="dark-">
			<div className="h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
				<div className="bg-gray-100 dark:bg-gray-800">
					<Routing/>
				</div>
			</div>
		</div>
	);
}

export default App;
