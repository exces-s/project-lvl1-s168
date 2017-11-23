import readlineSync from 'readline-sync';

export const greeting = (welcomePhrase = '') => {
  const welcome = (`Welcome to the Brain Games \n${welcomePhrase}\n`);
  const userName = ('May I have your name? ');
  return (`${welcome}${userName}`);
};

export const findOutName = () => {
  const userName = readlineSync.question();
  return userName;
};


export const helloUser = name => (`Hello, ${name}!`);


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


export const multipli = (pair) => {
  const result = car(pair) * cdr(pair);
  const screenText = (`${car(pair)} * ${cdr(pair)}`);
  return makeOperationInfo(result, screenText);
};
export const add = (pair) => {
  const screenText = (`${car(pair)} + ${cdr(pair)}`);
  const result = car(pair) + cdr(pair);
  return makeOperationInfo(result, screenText);
};
export const sub = (pair) => {
  const screenText = (`${car(pair)} - ${cdr(pair)}`);
  const result = car(pair) - cdr(pair);
  return makeOperationInfo(result, screenText);
};


export const randomInt = (min, max) => {
  const random = ((min - 0.5) + Math.random()) * (max - min);
  return Math.round(random);
};


export const calcOperation = () => {
  const randomCalcOperation = (pair) => {
    const random = randomInt(1, 3);
    switch (random) {
      case 1:
        return multipli(pair);
      case 2:
        return add(pair);
      default:
        return sub(pair);
    }
  };

  const num1 = randomInt(1, 9);
  const num2 = randomInt(1, 9);
  const pair = cons(num1, num2);
  return randomCalcOperation(pair);
};


export const gcdOperation = (pair) => {
  const getA = car(pair);
  const getB = cdr(pair);

  if (getA < getB) {
    return gcdOperation(cons(getB, getA));
  } else if (getA === 0 || getB === 0) {
    const screenText = (`${getA} ${getB}`);
    const result = 0;
    return makeOperationInfo(result, screenText);
  } else if (getA === getB) {
    const screenText = (`${getA} ${getB}`);
    const result = getA;
    return makeOperationInfo(result, screenText);
  } else if (getA === 1 || getB === 1) {
    const screenText = (`${getA} ${getB}`);
    const result = 1;
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 === 0 && getB % 2 === 0) {
    const screenText = (`${getA} ${getB}`);
    const result = 2 * getResult(gcdOperation(cons(getA / 2, getB / 2)));
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 === 0 && getB % 2 !== 0) {
    const screenText = (`${getA} ${getB}`);
    const result = getResult(gcdOperation(cons(getA / 2, getB)));
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 !== 0 && getB % 2 === 0) {
    const screenText = (`${getA} ${getB}`);
    const result = getResult(gcdOperation(cons(getA, getB / 2)));
    return makeOperationInfo(result, screenText);
  }
  const screenText = (`${getA} ${getB}`);
  const result = getResult(gcdOperation(cons((getA - getB) / 2, getB)));
  return makeOperationInfo(result, screenText);
};


export const checkResult = (gameOperation, userName) => {
  const iter = (acc) => {
    // console.log(gcdOperation(gameOperation));
    if (acc >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return (`Congratulations, ${userName}!`);
    }
    const operation = gameOperation();
    const operationResult = getResult(operation);
console.log(operationResult);
    const userInput = readlineSync.question(`Question: ${getScreenText(operation)} `);

    if (userInput === String(operationResult)) {
      console.log('it\'s goddamn right!');
      return iter(acc + 1);
    }
    console.log('Wrong!');
    return ('Wrong!');
  };
  return iter(0);
};
