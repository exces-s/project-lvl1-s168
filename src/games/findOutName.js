import readlineSync from 'readline-sync';
import { welcome } from '..';

export const findOutName = () => {
  welcome();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default findOutName;
