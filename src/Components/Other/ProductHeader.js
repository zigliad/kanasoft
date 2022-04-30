import Grid from "@material-ui/core/Grid";
import "styles/main.css";
import { useBreakpoints } from "react-use-breakpoints";
import Undraw from "react-undraw";

export default function ProductHeader({ title, undraw, opposite = false }) {
	const { breakpoint } = useBreakpoints();
	const breakPointToImageSize = {
		xs: 300,
		sm: 300,
		md: 340,
		lg: 500,
		xl: 640,
	};

	const imagePart = (
		<Grid item xs={12} md={6} lg={5}>
			<div className="p-6">
				<Undraw
					name={undraw}
					height={`${breakPointToImageSize[breakpoint]}`}
				/>
			</div>
		</Grid>
	);

	return (
		<Grid container justify="space-around" alignItems="center">
			{opposite && imagePart}
			<Grid item xs={12} md={6} lg={5}>
				<div className="p-6 items-center md:items-start flex flex-col">
					<p className="md:text-left h-auto text-center text-6xl lg:text-6xl font-bold break-words">
						{title}
					</p>
				</div>
			</Grid>
			{!opposite && imagePart}
		</Grid>
	);
}
