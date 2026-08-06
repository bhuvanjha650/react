import { useState } from "react"


function App() {
  const [color , setColor] = useState('black');
  return (
    <div className="w-full h-screen duration 500" style={{backgroundColor: color}}>
       <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-2 shadow-lg rounded-lg px-3 py-4 bg-white">

        <button onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}> red</button>

         <button onClick={() => setColor("blue")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}> blue</button>

         <button onClick={() => setColor("yellow")}
         className="outline-none px-4 py-1 rounded-full text-#1111 shadow-lg"
        style={{backgroundColor: "yellow"}}> yellow</button>

         <button onClick={() => setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}> green</button>
        
        </div>
     </div>
    </div>
  );
}

export default App;