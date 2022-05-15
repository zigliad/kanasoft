import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import { SECTIONS } from "Config/about";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { CANNASOFT_STOCK_SYMBOL } from "Config/stock";
import PDF1 from "Files/BYND Cannasoft December 2021 Final for Sedar.pdf";
import PDF2 from "Files/BYND Cannasoft MDA Dec 2021.pdf";
import PDF3 from "Files/BYND Notice and Circular.pdf";

export default function Investors() {
	const data = SECTIONS.map((section, index) => {
		return (
			<div className="space-y-2" id={String(index)}>
				<p className="gradient-title">{section.title}</p>
				<p className="info-text">{section.message}</p>
			</div>
		);
	});

	return (
		<div className="page-padding">
			<PageHeader title="Hi, Investors" undraw="setup_analytics" />
			<div className="space-y-12">
				<div className="flex justify-center space-x-8 w-full">
					<a
						target="_blank"
						href={
							"https://www.sedar.com/DisplayProfile.do?lang=EN&issuerType=03&issuerNo=00050734"
						}
						className="no-underline hover:underline gradient-title"
					>
						SEDAR
					</a>
					<p className="black-title">/</p>
					<a
						target="_blank"
						href={
							"https://www.thecse.com/en/listings/life-sciences/bynd-cannasoft-enterprises-inc"
						}
						className="no-underline hover:underline gradient-title"
					>
						CSE
					</a>
				</div>
				<div className="h-96">
					<TradingViewWidget
						symbol={CANNASOFT_STOCK_SYMBOL}
						theme={Themes.DARK}
						autosize
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<a href={PDF1} download>
						BYND Cannasoft December 2021 Final for Sedar
					</a>
					<a href={PDF2} download>
						BYND Cannasoft MDA Dec 2021
					</a>
					<a href={PDF3} download>
						BYND Notice and Circular
					</a>
				</div>
				<p className="disclaimer-text">
					The Content in this website including information regarding
					the company`s products, future plans,income forecast, costs
					and profit from the different projects it is and will be
					leading contains forward-looking statements that involve
					risks and uncertainties, which may cause actual results to
					differ materially from the statements made. When used in
					this website, the words “may”, “would”, “could”, “will”,
					“intend”, “plan”, “anticipate”, “believe”, “estimate”,
					“expect” and similar expressions are intended to identify
					forward-looking statements. Such statements reflect our
					current views with respect to future events and are subject
					to such risks and uncertainties. Many factors could cause
					our actual results to differ materially from the statements
					made, including those factors discussed in filings made by
					us with the Canadian securities regulatory authorities.
					Should one or more of these risks and uncertainties, such as
					currency and interest rate fluctuations, increased
					competition and general economic and market factors, occur
					or should assumptions underlying the forward looking
					statements prove incorrect, actual results may vary
					materially from those described herein as intended, planned,
					anticipated, or expected. We do not intend and do not assume
					any obligation to update these forward-looking statements,
					except as required by law. Shareholders are cautioned not to
					put undue reliance on such forward-looking statements.
				</p>
			</div>
		</div>
	);
}
