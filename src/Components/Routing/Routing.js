import Navbar from "Components/Routing/Navbar";
import 'styles/main.css';
import { LINKS_DATA } from 'Config/config.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Footer from "Components/Routing/Footer";
import PageNotFound from "Components/Pages/PageNotFound";

export default function Routing() {

	const switchData = Object.values(LINKS_DATA).map(item => {
		const ComponentPage = item.component
		return (
			<Route exact={true} path={item.to} key={item.to}>
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

					<Route exact path="/kanasoft">
						<Redirect to="/" />
					</Route>
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
