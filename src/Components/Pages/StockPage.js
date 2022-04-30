import "styles/main.css";
import PageHeader from "Components/Other/PageHeader";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { CANNASOFT_STOCK_SYMBOL } from "Config/stock";

export default function StockPage() {
	return (
		<div className="page-padding">
			<PageHeader title="Our Stock" undraw="setup_analytics" />
			<div className="h-96">
				<TradingViewWidget
					symbol={CANNASOFT_STOCK_SYMBOL}
					theme={Themes.DARK}
					autosize
				/>
			</div>
		</div>
	);
}
