import "styles/main.css";
import { useEffect, useRef } from "react";
import Logo from "Images/Other/cannasoft-logo.svg";
import Grid from "@material-ui/core/Grid";
import PagePreview from "Components/Other/PagePreview";
import FadeIn from "react-fade-in";
import { UIStore } from "UIStore";
import { useHistory } from "react-router-dom";
import { LINKS_DATA, STORY_URI, COMPANY_NAME } from "Config/config";
import { CANNASOFT_STOCK_SYMBOL } from "Config/stock";

export default function MainPage() {
	const animationTransition = 3000;

	UIStore.update((s) => {
		s.transparentNavbar = true;
	});

	const history = useHistory();
	const toInvestors = () => {
		UIStore.update((s) => {
			s.transparentNavbar = false;
		});
		history.push(LINKS_DATA.investors.to);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		return () => {
			if (history.action === "POP") {
				UIStore.update((s) => {
					s.transparentNavbar = false;
				});
			}
		};
	}, [history]);

	return (
		<div>
			<div className="bg-gradient-to-br from-indigo-900 to-ks-dark-purple h-screen p-24 flex flex-col justify-center items-center w-full">
				<Grid
					container
					spacing={3}
					justify="space-evenly"
					alignItems="center"
				>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<FadeIn transitionDuration={animationTransition}>
							<div className="text-white h-auto font-bold break-words flex flex-col justify-center items-center w-full mt-14 md:mt-0">
								<div className="">
									<p className="text-4xl">We Are</p>
									<p className="text-5xl md:text-7xl 2xl:text-8xl mt-2">
										{COMPANY_NAME}
									</p>
									<div className="flex flex-row justify-between">
										<button
											className="pl-1 focus:outline-none focus:border-0"
											onClick={toInvestors}
										>
											<p className="text-xl font-medium text-ks-green hover:text-ks-orange transition mt-2">
												{CANNASOFT_STOCK_SYMBOL}
											</p>
										</button>
										<a
											target="_blank"
											href={STORY_URI}
											className="text-xl font-medium text-ks-green hover:text-ks-orange transition mt-2"
										>
											Our Story
										</a>
									</div>
								</div>
							</div>
						</FadeIn>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<FadeIn transitionDuration={animationTransition}>
							<div className="flex flex-col justify-center items-center w-full mt-12 md:mt-0">
								<img className="h-80 md:h-96" src={Logo} />
							</div>
						</FadeIn>
					</Grid>
				</Grid>
			</div>
			<div className="page-padding bg-gray-200 dark:bg-gray-600">
				<PagePreview
					title="Hi, Investors"
					buttonTitle="Let's talk business"
					link="/investors"
					undraw="business_deal"
				/>
			</div>
			<div className="page-padding">
				<PagePreview
					title="Cannasoft In The Press"
					buttonTitle="Take a look"
					link="/press"
					undraw="mobile_browsers"
					opposite
				/>
			</div>
			<div className="page-padding bg-gray-200 dark:bg-gray-600">
				<PagePreview
					title="Check Our Products"
					buttonTitle="Take a tour"
					link="/products"
					undraw="art_lover"
				/>
			</div>
			<div className="page-padding">
				<PagePreview
					title="Meet Our Clients"
					buttonTitle="Take a look"
					link="/clients"
					undraw="experts"
					opposite
				/>
			</div>
			<div className="page-padding bg-gray-200 dark:bg-gray-600">
				<PagePreview
					title="Meet Our Heroes"
					buttonTitle="Our team"
					link="/team"
					undraw="instant_support"
				/>
			</div>
			<div className="page-padding">
				<PagePreview
					title="Know Us Better"
					buttonTitle="About us"
					link="/about"
					undraw="team_spirit"
					opposite
				/>
			</div>
			<div className="page-padding bg-gray-200 dark:bg-gray-600">
				<PagePreview
					title="Keep In Touch"
					buttonTitle="Contact us"
					link="/contact"
					undraw="personal_information"
				/>
			</div>
		</div>
	);
}
