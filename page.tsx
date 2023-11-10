"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const UserPage = () => {

  return <div>User Page Content</div>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customValue, setCustomValue] = useState(0);


  const increment = () => {
    setCount(count + customValue);
  };

  const decrement = () => {
    setCount(count - customValue);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='row mt-5'>
        <div className='justify-between p-22'>
        <Link href="/user" passHref={true} legacyBehavior={true}>
         <a>Click me</a>
       </Link>
        </div>
        <p className='text-yellow-500 font-semibold'>Count: {count}</p>
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(parseInt(e.target.value, 0))}
          className='bg-gray-100 rounded p-1 m-3'
        />
        <button className='bg-blue-500 text-white font-semibold rounded p-1 m-3' onClick={increment}>Increment</button>
        <button className='bg-red-500 text-white font-semibold rounded p-1' onClick={decrement}>Decrement</button>
        
      </div>
    
    </main>
  );
};

export default Counter;
