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

const gcdConditions = (pair) => {
  const getA = car(pair);
  const getB = cdr(pair);

  if (getA === 0 || getB === 0) {
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
    const result = 2 * getResult(gcdConditions(cons(getA / 2, getB / 2)));
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 === 0 && getB % 2 !== 0) {
    const screenText = (`${getA} ${getB}`);
    const result = getResult(gcdConditions(cons(getA / 2, getB)));
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 !== 0 && getB % 2 === 0) {
    const screenText = (`${getA} ${getB}`);
    const result = getResult(gcdConditions(cons(getA, getB / 2)));
    return makeOperationInfo(result, screenText);
  } else if (getA % 2 !== 0 && getB % 2 !== 0 && getB > getA) {
    const screenText = (`${getA} ${getB}`);
    const result = getResult(gcdConditions(cons(getA, (getB - getA) / 2)));
    return makeOperationInfo(result, screenText);
  }
  const screenText = (`${getA} ${getB}`);
  const result = getResult(gcdConditions(cons((getA - getB) / 2, getB)));
  return makeOperationInfo(result, screenText);
};


export const gcdOperation = () => {
  const a = randomInt(1, 20);
  const b = randomInt(1, 20);
  const gcdPair = a < b ? cons(b, a) : cons(a, b);
  return gcdConditions(gcdPair);
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

export const numToString = num => String(num);

export const findBiggestPosition = (stringNumber) => {
  const biggestPosition = (firstNumPosition, secondNumPosition) => {
    if (secondNumPosition > stringNumber.length - 1) {
      return firstNumPosition;
    }

    if (stringNumber[firstNumPosition] < stringNumber[secondNumPosition]) {
      return biggestPosition(secondNumPosition, secondNumPosition + 1);
    }
    return biggestPosition(firstNumPosition, secondNumPosition + 1);
  };

  return biggestPosition(0, 1);
};

export const findSmallestPosition = (stringNumber) => {
  const smallestPosition = (firstNumPosition, secondNumPosition) => {
    if (secondNumPosition > stringNumber.length - 1) {
      return firstNumPosition;
    }

    if (stringNumber[firstNumPosition] <= stringNumber[secondNumPosition]) {
      return smallestPosition(firstNumPosition, secondNumPosition + 1);
    }
    return smallestPosition(secondNumPosition, secondNumPosition + 1);
  };

  return smallestPosition(0, 1);
};

export const deposeByWeight = (stringNum, newNum = '', cutNum = stringNum) => {
  if (stringNum.length === newNum.length) {
    return newNum;
  }

  const smallestPos = findSmallestPosition(cutNum);
  const newNumber = newNum + cutNum[smallestPos];

  const compileCutNumber = (cutNumber, position) => {
    if (cutNumber.length === cutNum.length - 1) {
      return deposeByWeight(stringNum, newNumber, cutNumber);
    } else if (position === findSmallestPosition(cutNum)) {
      return compileCutNumber(cutNumber, position + 1);
    }

    const cutN = cutNumber + cutNum[position];

    return compileCutNumber(cutN, position + 1);
  };
  return compileCutNumber('', 0);
};


export const findBalanceNum = () => {
  const number = String(randomInt(1, 5000));
  const originalNum = deposeByWeight(number);

  const balance = (num) => {
    const biggestPosition = findBiggestPosition(num);
    const smallestPosition = findSmallestPosition(num);

    const firstNum = num[0];
    const lastNum = num[num.length - 1];

    const isFirstEqualLast = firstNum === lastNum || firstNum === String(lastNum - 1);
    const isDiffMaxOne = num[biggestPosition] - num[smallestPosition] <= 1;
    const isSmallInLeft = num[smallestPosition] === num[0];
    const isBigllInRight = num[biggestPosition] === num[num.length - 1];

    if (isFirstEqualLast && isDiffMaxOne && isSmallInLeft && isBigllInRight) {
      return num;
    }

    const compileNumber = (newNum, position) => {
      if (newNum.length === originalNum.length) {
        return balance(newNum);
      } else if (position === biggestPosition) {
        const newNumeral = Number(num[position]) - 1;
        const newNumber = newNum + newNumeral;
        return compileNumber(String(newNumber), position + 1);
      } else if (position === smallestPosition) {
        const newNumeral = Number(num[position]) + 1;
        const newNumber = newNum + newNumeral;
        return compileNumber(String(newNumber), position + 1);
      }
      const newNumber = newNum + num[position];
      return compileNumber(newNumber, position + 1);
    };
    return compileNumber('', 0);
  };
  const screenText = (originalNum);
  const result = balance(originalNum);
  return makeOperationInfo(result, screenText);
};
