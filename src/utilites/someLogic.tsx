// utilities.js
'use server'

export async function greet(name : string) {
    return `Hello, ${name}!`;
  }
  
  export async function addNumbers(a : number, b: number) {
    return a + b;
  }
  