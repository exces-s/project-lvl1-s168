import { randomInt, playGame, cons } from '..';


const evenOperation = () => {
  const random = randomInt(1, 100);
  const result = random % 2 === 0 ? 'yes' : 'no';
  return cons(result, random);
};


const checkEven = () => {
  const rulesPhrase = 'Answer "yes" if number even otherwise answer "no".';
  return playGame(evenOperation, rulesPhrase);
};

export default checkEven;
