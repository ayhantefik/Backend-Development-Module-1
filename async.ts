// PART 1

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

const flipCoinResult = async () => {
  try{
    const result = await flipCoin();
    console.log(result);
  }
  catch(error) {
    console.log(error);
  }
}

const diceRollResult = async () => {
  try{
    const result = await diceRoll();
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}

//flipCoinResult();
//diceRollResult();

// PART 2

type AdviceResponse = {
  slip: {
    id: number;
    advice: string;
  }
}

const fetchAdvice = async () => {
  try{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json() as AdviceResponse;
    console.log(data.slip.advice);
  }
  catch(error){
    console.log(error);
  }
}

// fetchAdvice();

// PART 3

const getAdviceAfterCoinFlip = async () => {
  try{
    const flipResult = await flipCoin();
    console.log(flipResult);
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json() as AdviceResponse;
    console.log(data.slip.advice)
  }
  catch(error){
    console.log(error);
  }
}

getAdviceAfterCoinFlip();