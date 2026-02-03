type AdviceResponse = {
  slip: {
    id: number;
    advice: string;
  }
}

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    const result: number = Math.random();
    if(result > 0.5){
      resolve("You win");
    }
    else{
      reject("You lose");
    }
  })
}

const diceRoll = () => {
  return new Promise((resolve, reject) => {
    const result: number = Math.floor(Math.random() * 6) + 1
    if(result == 6){
      resolve('You hit 6');
    }
    else{
      reject('You did not hit 6');
    }
  })
}

const fetchAdvice = (): Promise<void> => {
  return fetch('https://api.adviceslip.com/advice')
    .then((response: Response) => response.json() as Promise<AdviceResponse>)
    .then((data: AdviceResponse) => {
      console.log(data.slip.advice)
    })
    .catch((error: unknown) => {
      console.error('Error fetching advice', error)
    })
}

// flipCoin()
//   .then((message) => {
//     console.log(message);
//     fetchAdvice();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

diceRoll()
  .then((message) => {
    console.log(message);
    fetchAdvice();
  })
  .catch((error) => {
    console.log(error)
  });
