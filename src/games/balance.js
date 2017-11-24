import whatIsYourName from '../games/whatIsYourName';
import { checkResult, findBalanceNum } from '..';


const balance = () => {
  const balanceWelcomePhrase = 'Balance the given number.';
  const userName = whatIsYourName(balanceWelcomePhrase);

  const gameOperation = () => findBalanceNum();
  checkResult(gameOperation, userName);
};

export default balance;
