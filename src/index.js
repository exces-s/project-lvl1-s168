import readlineSync from 'readline-sync';


export const findOutName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};


export const checkEven = (userName) => {
  const verifyEven = (acc) => {
    if (acc >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }

    const randomInteger = () => {
      const min = 1;
      const max = 100;
      const random = (min + Math.random()) * max;
      return Math.round(random);
    };

    const isEven = integer => (integer % 2 === 0 ? 'yes' : 'no');

    const checkResult = (integer) => {
      const result = readlineSync.question(`Question: ${integer} `);
      if (result === isEven(randomInteger)) {
        console.log('Correct!');
        return verifyEven(acc + 1);
      } else if (isEven(randomInteger) === 'yes') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
      }
      return null;
    };
    return checkResult(randomInteger());
  };
  return verifyEven(0);
};
