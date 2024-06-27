"use client";

import { useState } from 'react';

import { greet, addNumbers } from '@/utilites/someLogic'; 

function TestApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const showGreeting = () => {
    const greetingMessage = greet("User");
    setMessage(greetingMessage);
  };

  const calculateSum = () => {
    const sum = addNumbers(5, 10);
    setMessage(`The sum of 5 and 10 is: ${sum}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/app/testApp/page.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>Count: {count}</p>
          <button onClick={incrementCount}>Increment</button>
        </div>
        <div>
          <button onClick={showGreeting}>Show Greeting</button>
          <button onClick={calculateSum}>Calculate Sum</button>
          <p>{message}</p>
        </div>
        <div className='w-10 h-10 bg-primary'></div>
      </header>
      
    </div>
  );
}

export default TestApp;
