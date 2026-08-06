import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  disableAmount = false,
  disableCurrency = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          disabled={disableAmount}
          onChange={(e) =>
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value)) // agr valur remove ho jaye to empty string set kar do otherwise number me convert kar do
          }               //onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} initially we were doing this but this create problem when user delete the value from input box and it will show NaN in input box so we have to check if value is empty then we will set it to empty string otherwise we will convert it to number
        />
      </div>

      
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={disableCurrency}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
