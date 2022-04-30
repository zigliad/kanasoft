import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import { useHistory } from "react-router-dom";
import { UIStore } from "UIStore";
import MyButton from "Components/Form/MyButton";

export default function PageNotFound() {
	const history = useHistory();
	const toHome = () => {
		UIStore.update((s) => {
			s.transparentNavbar = true;
		});
		history.push("/");
		window.scrollTo(0, 0);
	};

	return (
		<div className="page-padding">
			<PageHeader title="Oops! 404" undraw="taken" />
			<div className="flex flex-col items-center">
				<MyButton title={"Go back"} onClick={toHome} />
			</div>
		</div>
	);
}
