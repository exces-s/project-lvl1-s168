import { calcOperation, checkResult } from '..';
import whatIsYourName from './whatIsYourName';


const calc = () => {
  const calcWelcomePhrase = 'What is the result of the expression?';
  const userName = whatIsYourName(calcWelcomePhrase);

  const gameOperation = () => calcOperation();
  checkResult(gameOperation, userName);
};

export default calc;
