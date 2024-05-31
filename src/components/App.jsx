import "../css/App.css";
import Exchange from "./Exchange.jsx";
import { useCurrencyInfo } from "../hooks/useCurrencyInfo.js";
import { useState } from "react";

function App() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    console.log("currencyInfo: ", currencyInfo);

    const allCurrency = Object.keys(currencyInfo);
    console.log(allCurrency);

    const convert = () => {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    };

    const changeCurrencyType = (action, currencyType) => {
        if (action === "From") {
            setFrom(currencyType);
        }
        if (action === "To") {
            setTo(currencyType);
        }
    };

    const onAmountChange = (amount) => {
        setAmount(amount);
    }

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    return (
        <div>
            <div className="main">
                <div className="innerCard">
                    <div className="content">
                        <Exchange
                            action="From"
                            currencyType={from}
                            allCurrency={allCurrency}
                            onAmountChange={onAmountChange}
                            amount={amount}
                            buttonDisabled={false}
                            changeCurrencyType={changeCurrencyType}
                        />
                        
                        <button className="swap" onClick={swap}>Swap</button>
                        <Exchange
                            action="To"
                            currencyType={to}
                            buttonDisabled={true}
                            allCurrency={allCurrency}
                            amount={convertedAmount}
                            changeCurrencyType={changeCurrencyType}
                        />
                        <button className="convert" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
