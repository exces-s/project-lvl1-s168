import { car, cdr, cons, randomInt, playGame } from '..';


const multipli = (pair) => {
  const result = car(pair) * cdr(pair);
  const screenText = (`${car(pair)} * ${cdr(pair)}`);
  return cons(result, screenText);
};

const add = (pair) => {
  const screenText = (`${car(pair)} + ${cdr(pair)}`);
  const result = car(pair) + cdr(pair);
  return cons(result, screenText);
};

const sub = (pair) => {
  const screenText = (`${car(pair)} - ${cdr(pair)}`);
  const result = car(pair) - cdr(pair);
  return cons(result, screenText);
};

const calculator = () => {
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
  const gameRules = 'What is the result of the expression?';
  playGame(calculator, gameRules);
};


export default calc;
