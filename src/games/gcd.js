import whatIsYourName from '../games/whatIsYourName';
import { checkResult, gcdOperation } from '..';


const gcd = () => {
  const gcdWelcomePhrase = 'Find the greatest common divisor of given numbers.';
  const userName = whatIsYourName(gcdWelcomePhrase);

  const gameOperation = () => gcdOperation();
  checkResult(gameOperation, userName);
};

export default gcd;
