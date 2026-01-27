
//  (1)

// type helloCallBackFunction = () => void;

// const hello = (helloCallBack: helloCallBackFunction) => {
//     helloCallBack();
// }

// const helloCallBack = () => {
//     console.log("Hello from callback!");
// }

// hello(helloCallBack);

/* ###################################################################*/

//  (2)

// type sayHelloLaterCallBackFunction = () => void;

// const sayHelloLater = (sayHelloLaterCallBack: sayHelloLaterCallBackFunction) => {
//     setTimeout(() => {
//         sayHelloLaterCallBack()
//     }, 2000)
// }

// const sayHelloLaterCallBack = () => {
//     console.log("Hi, I am late!");
// }

// sayHelloLater(sayHelloLaterCallBack);

/* ###################################################################*/

//  (3)

// type matchCallBackFunction = (result: number) => void

// const math = (num1: number, num2: number, matchCallBack: matchCallBackFunction) => {
//     const result = num1 + num2;
//     matchCallBack(result);
// }

// const matchCallBack = (result: number) => {
//     console.log("Result: ", result);
// }

// math(5, 4, matchCallBack);

/* ###################################################################*/

//  (4)

// type upperCaseCallBackFunction = (s: string) => void;

// const upperCase = (s: string, upperCaseCallBack: upperCaseCallBackFunction) => {
//     upperCaseCallBack(s);
// }

// const upperCaseCallBack = (s: string) => {
//     console.log(s.toUpperCase());
// }

// upperCase("typescript", upperCaseCallBack);

/* ###################################################################*/

//  (5)

// type orderPizzaCallBackFunction = (message: string) => void;

// const orderPizza = (orderPizzaCallBack: orderPizzaCallBackFunction) => {
//     console.log("Ordering pizza...");
//     setTimeout(() => {
//         orderPizzaCallBack("Your pizza is ready!");
//     }, 3000)
// }

// const orderPizzaCallBack = (message: string) => {
//     console.log(message)
// }

// orderPizza(orderPizzaCallBack);

/* ###################################################################*/

// (6)

// type multipleMessageCallBackFunction = (message: string) => void

// const multipleMessage = (multipleMessageCallBack: multipleMessageCallBackFunction) => {
//     const messages: string[] = ["message 1", "message 2", "message 3"];

//     messages.map((message) => {
//         multipleMessageCallBack(message);
//     });
// }

// const multipleMessageCallBack = (message: string) => {
//     console.log(message);
// }

// multipleMessage(multipleMessageCallBack);

/* ###################################################################*/

//  (7)

// type downloadCallBackFunction = (url: string) => void;

// const download = (url: string, downloadCallBack: downloadCallBackFunction) => {
//     console.log(url);
//     console.log("Downloading...");
//     setTimeout(() => {
//         downloadCallBack(url);
//     }, 2000);
// }

// const downloadCallBack = (url: string) => {
//     console.log(`Downloaded data from <${url}>`);
// }

// download("https://exemple.com/download", downloadCallBack);

/* ###################################################################*/

//  (8)

// type succesCallBackFunction = (randomNum : number) => void;
// type errorCallBackFunction = (randomNum : number) => void;

// const randomCall = (succesCallBack: succesCallBackFunction, errorCallBack: errorCallBackFunction) => {
//     const randomNum: number = Math.random();

//     if(randomNum >= 0.5){
//         succesCallBack(randomNum);
//     }
//     else{
//         errorCallBack(randomNum);
//     }
// }

// const succesCallBack = (randomNum : number) => {
//     console.log("Succes! Random number was ", randomNum); 
// }

// const errorCallBack = (randomNum : number) => {
//     console.log("Error! Random number was ", randomNum); 
// }

// randomCall(succesCallBack, errorCallBack);

/* ################################################################### */

//  (9)

// type matchCallBackFunction = (num1: number, num2: number, operation: string) => void;

// const math = (num1: number, num2: number, operation: string, matchCallBack: matchCallBackFunction) => {
//     matchCallBack(num1, num2, operation);
// }

// const matchCallBack = (num1: number, num2: number, operation: string) => {
//     operation == "addition" && console.log(`${num1} + ${num2} = `, num1 + num2);
//     operation == "subtration" && console.log(`${num1} - ${num2} = `, num1 - num2)
//     operation == "multiplication" && console.log(`${num1} * ${num2} = `, num1 * num2)
//     operation == "division" && console.log(`${num1} / ${num2} = `, num1 / num2)
// }

// math(1, 2, "addition", matchCallBack);
// math(7, 2, "subtration", matchCallBack);
// math(5, 5, "multiplication", matchCallBack);
// math(20, 2, "division", matchCallBack);

/* ################################################################### */

//  (10)

type callbackFunction  = () => void;

const chainedCallbacks = (firstCallBack: callbackFunction, secondCallBack: callbackFunction, thirdCallBack: callbackFunction) => {
    const callBacks: callbackFunction[] = [firstCallBack, secondCallBack, thirdCallBack];

    callBacks.map((callBack, index) => {
        setTimeout(() => {
            callBack();
        }, 1000 * (index + 1));
    })
}

const firstCallBack = () => {
    console.log("Step 1 done!");
}
const secondCallBack = () => {
    console.log("Step 2 done!");
}
const thirdCallBack = () => {
    console.log("Step 3 done!");
}

chainedCallbacks(firstCallBack, secondCallBack, thirdCallBack);