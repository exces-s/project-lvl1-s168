import { cons } from 'hexlet-pairs';
import { randomInt, playGame } from '..';


const createNumeral = (summNumbers, amountNumbers) => {
  if (summNumbers % amountNumbers === 0) {
    return summNumbers / amountNumbers;
  }
  return (summNumbers - (summNumbers % amountNumbers)) / amountNumbers;
};

const summ = (stringNumber) => {
  const addNums = (position, acc) => {
    if (stringNumber.length === position) {
      return acc;
    }
    const newAcc = acc + Number(stringNumber[position]);
    return addNums(position + 1, newAcc);
  };
  return addNums(0, 0);
};

const createBalance = () => {
  const number = String(randomInt(1, 9000));
  const numeralsSumm = summ(number);
  const numLength = number.length;

  const balanceNumber = (length, acc, summNumbers) => {
    if (acc.length === number.length) {
      return acc;
    }
    const newNum = createNumeral(summNumbers, length);
    const newAcc = `${acc}${newNum}`;
    return balanceNumber(length - 1, newAcc, summNumbers - newNum);
  };
  const screenText = number;
  const result = balanceNumber(numLength, '', numeralsSumm);
  return cons(result, screenText);
};


const balance = () => {
  const gameRules = 'Balance the given number.';
  return playGame(createBalance, gameRules);
};

export default balance;
