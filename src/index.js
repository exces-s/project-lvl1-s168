export const welcome = () => 'Welcome to the Brain Games';

export const makePair = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
      return null;
  }
};

export const getFirstNum = pair => pair('car');
export const getSecondNum = pair => pair('cdr');

export const multipli = pair => getFirstNum(pair) * getSecondNum(pair);
export const add = pair => getFirstNum(pair) + getSecondNum(pair);
export const sub = pair => getFirstNum(pair) - getSecondNum(pair);

export const randomInt = (min, max) => {
  const random = ((min - 0.5) + Math.random()) * (max - min);
  return Math.round(random);
};

export const getRandomOperation = (pair, numberOfOperations) => {
  const random = randomInt(1, numberOfOperations);
  switch (random) {
    case 1:
      console.log(`${getFirstNum(pair)} * ${getSecondNum(pair)}`);
      return multipli(pair);
    case 2:
      console.log(`${getFirstNum(pair)} + ${getSecondNum(pair)}`);
      return add(pair);
    default:
      console.log(`${getFirstNum(pair)} - ${getSecondNum(pair)}`);
      return sub(pair);
  }
};
