import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line
import { randomInt, playGame } from '..';

const generateProgressMember = (progressStep, firstMember, seqNumber) => {
  const progressMember = firstMember + ((seqNumber - 1) * progressStep);
  return progressMember;
};

const createProgression = (progressStep, firstMember, seqNumber = 1) => {
  if (seqNumber > 10) {
    return ''; // generateProgressMember(progressStep, firstMember, seqNumber);
  }
  const nextMember = generateProgressMember(progressStep, firstMember, seqNumber);
  const progression = `${nextMember} ${createProgression(progressStep, firstMember, seqNumber + 1)} `;
  return progression;
};

const screenText = (progression, invisMember) => progression.replace(invisMember, '..');

const progressionGame = () => {
  const progressStep = randomInt(1, 7);
  const invisSeqMember = randomInt(1, 4);
  const firstMember = randomInt(1, 8);

  const progression = createProgression(progressStep, firstMember);
  const invisMember = generateProgressMember(progressStep, firstMember, invisSeqMember);
  const screenTextProg = screenText(progression, invisMember);

  return cons(invisMember, screenTextProg);
};


const progress = () => {
  const gameRules = 'What number is missing in this progression?';
  playGame(progressionGame, gameRules);
};


export default progress;
