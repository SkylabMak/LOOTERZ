"use client"
import React, { useState } from 'react';

type Props = {};

function Page({}: Props) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prevCount => prevCount+1);
  }
  const handleDecrease = () => {
    setCount(prevCount => prevCount-1);
  }

  return (
    <>
    <div className='text-center'>

      <div className='font-bold text-red-500 text-4xl'>{count}</div>
      <button onClick={handleIncrease} className='bg-blue-400 rounded-sm p-1 m-1'>increase</button>
      <button onClick={handleDecrease} className='bg-blue-400 rounded-sm p-1 m-1'>decrease</button>

    </div>
    </>
  );
}

export default Page;
