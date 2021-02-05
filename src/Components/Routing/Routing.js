import Navbar from "Components/Routing/Navbar";
import 'styles/main.css';
import { LINKS_DATA } from 'Config/config.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

export default function Routing() {

	const switchData = Object.values(LINKS_DATA).map(item => {
		const ComponentPage = item.component
		return (
			<Route path={item.to}>
				<ComponentPage />
			</Route>
		)
	})

	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					{switchData}
				</Switch>
			</Router>
		</div>
	);
}
