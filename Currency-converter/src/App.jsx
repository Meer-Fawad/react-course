import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/Use-currencyinfo";

import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-500 text-white p-4 text-center">
        Currency Converter
      </h1>

      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-4">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            <div className="relative w-full h-0.5 mb-4">
              <button
                type="button"
                onClick={swap}
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;