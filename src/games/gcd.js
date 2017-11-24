import { cons, randomInt, playGame } from '..';


const findGcd = (a, b) => {
  console.log(a, b);
  if (a < b) {
    return findGcd(b, a);
  }
  if (a - b === 0) {
    console.log(b);
    return b;
  }
  if (a - b >= b) {
    return findGcd(a - b, b);
  }
  // a - b < b
  return findGcd(b, a - b);
};

const gcdOperation = () => {
  const a = randomInt(1, 20);
  const b = randomInt(1, 20);
  const screenText = (`${a} ${b}`);
  const result = findGcd(a, b);
  return cons(result, screenText);
};

const gcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  playGame(gcdOperation, gameRules);
};


export default gcd;
