import React, { useState } from "react";
import flower from './image/flower.jpg'
import explain from './image/explain.gif'
function App() {
  const [index,setIndex] = useState(1);
  const [movement,setMovement] = useState('');
  const move = () =>{
    const positions = ['','left-0 top-0','top-0 right-0','bottom-0 left-0','bottom-0 right-0']
    if(positions.length-1===index)
    {
      setIndex(0)
    }
    else
    {
      setIndex(index+1);
    }
    setMovement(positions[index])
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <div className="h-full py-8 sm:h-full w-full sm:w-1/2 flex flex-col justify-center items-center bg-green-300">
        <img src={explain} className="rounded-lg border-2 border-black justify-center items-center w-8/12" alt="flower"/>
        <div className='w-full h-full flex'>
          <div className='h-full w-1/2 flex justify-center items-center'>
            <button className='bg-blue-300 p-2 sm:p-4 rounded-lg border-2 border-white text-lg text-white font-bold' onClick={()=>{alert('Tum bahut achi ho Deepakshi')}}>Sure, I will love it!😊</button>
          </div>
          <div className='h-full w-1/2 flex justify-center items-center relative'>
            <button className={`p-2 sm:p-4 rounded-lg border-2 border-white text-lg text-white font-bold bg-blue-300 absolute ${movement}`} onClick={move} onMouseEnter={move}>Naaaaaaa😒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
