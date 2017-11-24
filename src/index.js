import readlineSync from 'readline-sync';


export const greeting = (rulesPhrase = '') => {
  const welcome = (`Welcome to the Brain Games \n${rulesPhrase}\n`);
  const nameQuestion = ('May I have your name? ');
  console.log(`${welcome}${nameQuestion}`);
  const userName = readlineSync.question();
  console.log(`Hello, ${userName}!`);
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

export const makeOperationInfo = (resultOperation, screenText) => cons(resultOperation, screenText);
export const getResult = operationInfo => car(operationInfo);
export const getScreenText = operationInfo => cdr(operationInfo);

export const randomInt = (min, max) => {
  const random = ((min - 0.5) + Math.random()) * (max - min);
  return Math.round(random);
};

export const checkResult = (gameOperation, userName) => {
  const iter = (acc) => {
    if (acc >= 3) {
      console.log(`\nCongratulations, ${userName}!`);
      return (`Congratulations, ${userName}!`);
    }
    const operation = gameOperation();
    const operationResult = getResult(operation);
    // console.log(`!!!ОТВЕТ ДЛЯ ОТЛАДКИ: ${operationResult}`);
    const userInput = readlineSync.question(`Question: ${getScreenText(operation)} `);

    if (userInput === String(operationResult)) {
      console.log('it\'s goddamn right!\n');
      return iter(acc + 1);
    }
    console.log('Wrong!');
    return ('Wrong!');
  };
  return iter(0);
};

export const playGame = (gameType, gameRules) => {
  const userName = greeting(gameRules);

  checkResult(gameType, userName);
};
