import readlineSync from 'readline-sync';
import { randomInt } from '..';
import whatIsYourName from '../games/whatIsYourName';


const checkEven = () => {
  const evenWelcomePhrase = 'Answer "yes" if number even otherwise answer "no".';
  const userName = whatIsYourName(evenWelcomePhrase);

  const iter = (acc) => {
    if (acc >= 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const random = randomInt(1, 100);
    const evenOperation = random % 2 === 0 ? 'yes' : 'no';

    const result = readlineSync.question(`Question: ${random} `);
    if (result === evenOperation) {
      console.log('Correct!');
      return iter(acc + 1);
    } else if (evenOperation === 'yes') {
      return console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
    }
    return console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  };
  return iter(0);
};


export default checkEven;
