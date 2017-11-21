import readlineSync from 'readline-sync';
import { randomInt, welcome } from '..';
import { findOutName } from '../games/findOutName';


const checkEven = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = findOutName();

  const iter = (acc) => {
    if (acc >= 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const isEven = integer => (integer % 2 === 0 ? 'yes' : 'no');

    const random = randomInt(1, 100);

    const result = readlineSync.question(`Question: ${random} `);
    if (result === isEven(random)) {
      console.log('Correct!');
      return iter(acc + 1);
    } else if (isEven(random) === 'yes') {
      return console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
    }
    return console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  };
  return iter(0);
};


export default checkEven;
