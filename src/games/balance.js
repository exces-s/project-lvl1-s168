import { randomInt, playGame, cons } from '..';


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

const balanceNumber = () => {
  const number = String(randomInt(1, 9000));
  const numeralsSumm = summ(number);
  const numLength = number.length;

  const createBalance = (length, acc, summNumbers) => {
    if (acc.length === number.length) {
      return acc;
    }
    const newNum = createNumeral(summNumbers, length);
    const newAcc = `${acc}${newNum}`;
    return createBalance(length - 1, newAcc, summNumbers - newNum);
  };
  const screenText = number;
  const result = createBalance(numLength, '', numeralsSumm);
  return cons(result, screenText);
};


const balance = () => {
  const gameRules = 'Balance the given number.';
  return playGame(balanceNumber, gameRules);
};

export default balance;
