import { car, cdr, cons, getResult, makeOperationInfo, randomInt, playGame } from '..';


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

const gcdOperation = () => {
  const a = randomInt(1, 20);
  const b = randomInt(1, 20);
  const gcdPair = a < b ? cons(b, a) : cons(a, b);
  return gcdConditions(gcdPair);
};


const gcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gameType = () => gcdOperation();
  playGame(gameType, gameRules);
};


export default gcd;
