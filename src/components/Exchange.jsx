import React from "react";

const Exchange = ({
    currencyType = "usd",
    amount = 0,
    action = "from",
    onAmountChange,
    buttonDisabled = false,
    allCurrency,
    changeCurrencyType
}) => {
    return (
        <>
            <div className="card">
                <div className="amount">
                    <p className="from-to">{action}</p>
                    <input
                        type="number"
                        value={amount}
                        readOnly={buttonDisabled}
                        onChange={(e) => {
                            onAmountChange(e.target.value);
                        }}
                    />
                </div>
                <div className="currency-type">
                    <p className="currency-type">Currency Type</p>
                    <select name="currency" id="currency" value={currencyType} onChange={(e) => changeCurrencyType(action, e.target.value)}>
                        {allCurrency.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default Exchange;
