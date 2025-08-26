import BgColorChanger from './components/bgColorChanger'
import PasswordGenerator from './components/passwordGenerator'
import './App.css'
import { useState } from 'react'
import CurrencyConverter from './components/currencyComponents/CurrencyConverter';

function App() {
  const [showBgColorChanger, setShowBgColorChanger] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false); // ✅ added

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-xl font-semibold text-white mb-6">Select One</h1>

        {/* Conditional Rendering */}
        {!showGenerator && !showBgColorChanger && !showCurrencyConverter ? (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowGenerator(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
            >
              Open Password Generator
            </button>
            <button
              onClick={() => setShowBgColorChanger(true)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg shadow-md transition"
            >
              Background-Color Changer
            </button>
            <button
              onClick={() => setShowCurrencyConverter(true)} // ✅ fixed typo
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
            >
              Currency Converter
            </button>
          </div>
        ) : showGenerator ? (
          <PasswordGenerator />
        ) : showCurrencyConverter ? ( 
          <CurrencyConverter />
        ) : (
          <BgColorChanger />
        )}
      </div>
    </div>
  );
}


export default App
