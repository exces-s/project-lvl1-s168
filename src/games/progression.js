import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line
import { randomInt, playGame } from '..';

const invisNumPosition = () => {
  const num = randomInt(1, 7);
  return num % 2 === 0 ? num + 1 : num;
};

const createProgression = () => {
  const invisNumPos = invisNumPosition();
  const progressStep = randomInt(1, 7);

  const compileProgression = (progression, accNum) => {
    if (progression.length >= 27) {
      return progression;
    }
    if (accNum / progressStep === invisNumPos) {
      const newProgression = `${progression}.. `;
      return compileProgression(newProgression, accNum + progressStep);
    }
    const newProgression = `${progression}${String(accNum)} `;
    return compileProgression(newProgression, accNum + progressStep);
  };

  const result = invisNumPos * progressStep;
  const screenText = compileProgression('', 0);
  return cons(result, screenText);
};


const progress = () => {
  const gameRules = 'What number is missing in this progression?';
  playGame(createProgression, gameRules);
};

export default progress;
