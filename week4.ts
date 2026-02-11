// The code was corrected with the help of ESLint

// Task 1

// const greet = (firstName: string) => {
//   return `Hello ${firstName}`;
// };
// greet('Student')

// Task 2

// const double = (n:number) => {
//     return n*2;
// }
// console.log(double(5));

// Task 3

// const isEven = (num: number) => {
//   return num % 2 === 0;
// };

// console.log(isEven(4));

// Task 4

// const square = (x: number) => {
//   return x * x;
// };

// console.log(`Result: ${square(5)}`);

// Task 5

// const getAge = (year: number) => {
//   return 2026 - year;
// };

// console.log(`Calculated age is: ${getAge(2000)}`);

// Task 6

// const prices = [10, 20, 30];
// let total = 0;

// prices.forEach((p) => {
//   total += p;
// });

// console.log(`Total price is: ${total}`);

// Task 7

// const user = { name: 'John' };

// const sayHi = () => {
//   console.log(`Hi ${user.name}`);
// };

// sayHi();

// Task 8

// const colors = ['red', 'blue'];

// colors.forEach((c) => {
//   console.log(`Color: ${c}`);
// });

// Task 9

// const items = [1, 2, 3];

// const doubled = items.map((i) => {
//   return i * 2;
// });

// console.log(`Doubled items: ${doubled}`);¨

// Task 10

// const checkAuth = (user) => {
//   return user.isAdmin;
// };

// Task 11

// import { readFile } from 'fs/promises';

// const read = async (path: string): Promise<void> => {
//   try {
//     const data: string = await readFile(path, 'utf-8');
//     console.log(`File content:\n${data}`);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(`Failed to read file: ${error.message}`);
//     } else {
//       console.error('Unknown error occurred');
//     }
//   }
// };

// Task 12

// const getData = async (url: string) => {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Request failed ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error: unknown) {
//     console.error(error);
//   }
// };

// Task 13

// const process = (data: number[]): number[] => {
//   return data.filter((x: number) => 
//     { return x > 10;

//     })
//     .map((x: number) => {
//       return x * 2;
//     });
// };

// Task 14

// const timer = (ms: number) => {
//   return new Promise((res) => {
//     setTimeout(res, ms);
//   });
// };

// const testTimer = async () => {
//   console.log(`Timer started...`);
//   await timer(1000);
//   console.log(`Timer finished`);
// };

// testTimer();

// Task 15

// const logErr = (m: unknown) => {
//   console.error(`Error: ${m}`);
// };