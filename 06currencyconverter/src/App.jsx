import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/UseCurrencyinfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [convert, setConvert] = useState(0);
   const currencyInfo=useCurrencyInfo(from);
  const options= Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to)
    setTo(from)
setConvertedAmount(amount);
setAmount(convertedAmount);
  }
  const converts=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
     <h1 className='text-3xl bg-olive-500'>Currency Converter</h1>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{setAmount(amount)}}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                    </div>
            </div>
        </div>
    </>
  )
}

export default App
