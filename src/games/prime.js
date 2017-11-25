import { cons, car, cdt, toString } from 'hexlet-pairs'; // eslint-disable-line
import { playGame, randomInt } from '..';

const isPrime = (number) => {
  const iter = (divider = 2) => {
    if (number <= 0 || number === 1) {
      return false;
    } else if (number % divider === 0) {
      return false;
    } else if (divider >= number / 2) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter();
};

const isTrue = func => (func ? 'yes' : 'no');

const primeGame = () => {
  const number = randomInt(1, 50);
  const result = isTrue(isPrime(number));
  return cons(result, number);
};

const prime = () => {
  const gameRules = 'Is this number prime?';
  return playGame(primeGame, gameRules);
};

export default prime;
