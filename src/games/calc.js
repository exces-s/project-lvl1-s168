import { car, cdr, cons, makeOperationInfo, randomInt, playGame } from '..';

const multipli = (pair) => {
  const result = car(pair) * cdr(pair);
  const screenText = (`${car(pair)} * ${cdr(pair)}`);
  return makeOperationInfo(result, screenText);
};

const add = (pair) => {
  const screenText = (`${car(pair)} + ${cdr(pair)}`);
  const result = car(pair) + cdr(pair);
  return makeOperationInfo(result, screenText);
};

const sub = (pair) => {
  const screenText = (`${car(pair)} - ${cdr(pair)}`);
  const result = car(pair) - cdr(pair);
  return makeOperationInfo(result, screenText);
};

export const calculator = () => {
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


const calc = () => {
  const gameType = () => calculator();
  const gameRules = 'What is the result of the expression?';
  playGame(gameType, gameRules);
};


export default calc;
