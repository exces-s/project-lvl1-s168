import { cons } from 'hexlet-pairs'; // eslint-disable-line
import { randomInt, playGame } from '..';


const multipli = (a, b) => a * b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const calculator = () => {
  const a = randomInt(1, 9);
  const b = randomInt(1, 9);

  const randomCalcOperation = (num1, num2) => {
    const random = randomInt(1, 3);
    if (random === 1) {
      const screenText = `${num1} * ${num2}`;
      const result = multipli(num1, num2);
      return cons(result, screenText);
    } else if (random === 2) {
      const screenText = `${num1} + ${num2}`;
      const result = add(num1, num2);
      return cons(result, screenText);
    }
    const screenText = `${num1} - ${num2}`;
    const result = sub(num1, num2);
    return cons(result, screenText);
  };
  return randomCalcOperation(a, b);
};


const calc = () => {
  const gameRules = 'What is the result of the expression?';
  playGame(calculator, gameRules);
};


export default calc;
