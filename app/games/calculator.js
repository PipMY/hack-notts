import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setInput(String(evalResult));
      setResult("");
    } catch {
      setInput("");
      setResult("");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-[#F8F8F8] border-2 border-gray-400 rounded-lg shadow p-4 w-[260px] mx-auto">
        <div className="font-bold text-lg mb-2 text-gray-700 text-center">Finance Calculator</div>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-2 px-2 py-1 text-lg border border-gray-300 rounded bg-white text-gray-800 text-right font-mono shadow-inner"
        />
        <button
          onClick={handleClear}
          className="w-full mb-2 py-1 bg-gray-200 border border-gray-400 rounded text-gray-800 font-bold hover:bg-gray-300"
        >C</button>
        <div className="grid grid-cols-4 gap-2 mb-2">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((val) => (
            val === "=" ? (
              <button
                key={val}
                onClick={handleCalculate}
                className="py-2 bg-blue-200 border border-blue-400 rounded text-blue-900 font-bold text-lg hover:bg-blue-300"
              >=</button>
            ) : (
              <button
                key={val}
                onClick={() => handleClick(val)}
                className="py-2 bg-gray-100 border border-gray-300 rounded text-gray-800 font-bold text-lg hover:bg-gray-200"
              >{val}</button>
            )
          ))}
        </div>
        {/* No result display below input */}
      </div>
    </div>
  );
}
