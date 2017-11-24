import readlineSync from 'readline-sync';


export const greeting = (rulesPhrase = '') => {
  const welcome = (`Welcome to the Brain Games \n${rulesPhrase}\n`);
  const nameQuestion = ('\nMay I have your name? ');
  console.log(`${welcome}${nameQuestion}`);
  const userName = readlineSync.question();
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const numToString = num => String(num);

export const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return null;
  }
};
export const car = pair => pair('car');
export const cdr = pair => pair('cdr');

export const getResult = operationInfo => car(operationInfo);
export const getScreenText = operationInfo => cdr(operationInfo);

export const randomInt = (min, max) => {
  const random = ((min - 0.5) + Math.random()) * (max - min);
  return Math.round(random);
};

export const checkResult = (gameOperation, userName) => {
  const iter = (acc) => {
    if (acc >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return (`Congratulations, ${userName}!`);
    }
    const operation = gameOperation();
    const operationResult = getResult(operation);
    // console.log(`!!!ANSWER FOR DEBUG: ${operationResult}`);
    const userInput = readlineSync.question(`Question: ${getScreenText(operation)} `);

    if (userInput === String(operationResult)) {
      console.log('Correct\n');
      return iter(acc + 1);
    }
    console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${operationResult}'`);
    return ('Wrong!');
  };
  return iter(0);
};

export const playGame = (gameType, gameRules) => {
  const userName = greeting(gameRules);
  checkResult(gameType, userName);
};
