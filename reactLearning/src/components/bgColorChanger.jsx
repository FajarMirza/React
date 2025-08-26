import {useState} from "react";

function BgColorChanger() {
const[bgColor,setBgColor] = useState("");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:bgColor}}> 
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500">
      <h1 className="text-white text-center my-3">Background Color Changer</h1>
      <div>
        <button
        value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="green")}
         className="bg-green-700 hover:bg-green-900 text-white p-4 m-4 rounded-xl">
          Green
        </button>
        <button
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="red")}
         className="bg-red-700 hover:bg-red-900 text-white p-4 m-4 rounded-xl">
          Red
        </button>
        <button 
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="yellow")}
        className="bg-yellow-500 hover:bg-yellow-900 text-white p-4 m-4 rounded-xl">
          Yellow
        </button>
        <button 
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="blue")}
        className="bg-blue-700 hover:bg-blue-900 text-white p-4 m-4 rounded-xl">
          Blue
        </button>
        <button 
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="orange")}
        className="bg-orange-600 hover:bg-orange-900 text-white p-4 m-4 rounded-xl">
          Orange
        </button>
        <button 
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="purple")}
        className="bg-purple-500 hover:bg-purple-900 text-white p-4 m-4 rounded-xl">
          Purple
        </button>
        <button
         value={bgColor}
        onClick={(e)=>setBgColor(e.target.value="pink")}
         className="bg-pink-500 hover:bg-pink-900 text-white p-4 m-4 rounded-xl">
          Pink
        </button>
      </div>
    </div>
    </div> 
  );
   
}

export default BgColorChanger;
