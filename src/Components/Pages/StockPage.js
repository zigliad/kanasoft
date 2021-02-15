import 'styles/main.css';
import PageHeader from 'Components/Other/PageHeader';
import { UndrawBusinessPlan } from 'react-undraw-illustrations';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { UndrawFinance } from 'react-undraw-illustrations';
import { KANASOFT_STOCK_SYMBOL } from 'Config/stock';

export default function StockPage() {
    return (
        <div className="page-padding">
            <PageHeader title="Out Stock" undrawComponent={UndrawBusinessPlan} />
            <div className="h-96">
                <TradingViewWidget
                    symbol={KANASOFT_STOCK_SYMBOL}
                    theme={Themes.DARK}
                    autosize
                />
            </div>
        </div>
    );
}
