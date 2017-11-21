import readlineSync from 'readline-sync';
import { welcome, randomInt, getRandomOperation, makePair } from '..';
import { findOutName } from './findOutName';


const calc = () => {
  welcome();
  console.log('What is the result of the expression?');
  const userName = findOutName();

  const iter = (acc) => {
    if (acc >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return (`Congratulations, ${userName}!`);
    }

    const num1 = randomInt(1, 20);
    const num2 = randomInt(1, 20);
    const pair = makePair(num1, num2);
    const operation = getRandomOperation(pair, 3);
    const result = readlineSync.question();
    if (Number(result) === operation) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return console.log('Wrong!');
  };
  return iter(0);
};

export default calc;
