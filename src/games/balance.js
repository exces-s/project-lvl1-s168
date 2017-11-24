import { makeOperationInfo, randomInt, playGame } from '..';


const findBiggestPosition = (stringNumber) => {
  const biggestPosition = (firstNumPosition, secondNumPosition) => {
    if (secondNumPosition > stringNumber.length - 1) {
      return firstNumPosition;
    }
    if (stringNumber[firstNumPosition] < stringNumber[secondNumPosition]) {
      return biggestPosition(secondNumPosition, secondNumPosition + 1);
    }
    return biggestPosition(firstNumPosition, secondNumPosition + 1);
  };
  return biggestPosition(0, 1);
};

const findSmallestPosition = (stringNumber) => {
  const smallestPosition = (firstNumPosition, secondNumPosition) => {
    if (secondNumPosition > stringNumber.length - 1) {
      return firstNumPosition;
    }
    if (stringNumber[firstNumPosition] <= stringNumber[secondNumPosition]) {
      return smallestPosition(firstNumPosition, secondNumPosition + 1);
    }
    return smallestPosition(secondNumPosition, secondNumPosition + 1);
  };
  return smallestPosition(0, 1);
};

const deposeByWeight = (stringNum, newNum = '', cutNum = stringNum) => {
  if (stringNum.length === newNum.length) {
    return newNum;
  }
  const smallestPos = findSmallestPosition(cutNum);
  const newNumber = newNum + cutNum[smallestPos];

  const compileCutNumber = (cutNumber, position) => {
    if (cutNumber.length === cutNum.length - 1) {
      return deposeByWeight(stringNum, newNumber, cutNumber);
    } else if (position === findSmallestPosition(cutNum)) {
      return compileCutNumber(cutNumber, position + 1);
    }
    const cutN = cutNumber + cutNum[position];
    return compileCutNumber(cutN, position + 1);
  };
  return compileCutNumber('', 0);
};

const findBalanceNum = () => {
  const number = String(randomInt(1, 1000));
  const originalNum = deposeByWeight(number);

  const balance = (num, acc = 0) => {
  // acc - это вынужденная мера, т.к. у больших чисел иногда
  // цифры в середине стоят не по возрастанию.
  // чем бльше порядков у числа, тем больше должно быть дополнительных прогонов.
    if (acc >= 1) {
      return num;
    }
    const biggestPosition = findBiggestPosition(num);
    const smallestPosition = findSmallestPosition(num);

    const firstNum = num[0];
    const lastNum = num[num.length - 1];

    const isFirstEqualLast = firstNum === lastNum || firstNum === String(lastNum - 1);
    const isDiffMaxOne = num[biggestPosition] - num[smallestPosition] <= 1;
    const isSmallInLeft = num[smallestPosition] === num[0];
    const isBigllInRight = num[biggestPosition] === num[num.length - 1];

    if (isFirstEqualLast && isDiffMaxOne && isSmallInLeft && isBigllInRight) {
      return balance(num, acc + 1);
    }
    const compileNumber = (newNum, position) => {
      if (newNum.length === originalNum.length) {
        return balance(newNum);
      } else if (position === biggestPosition) {
        const newNumeral = Number(num[position]) - 1;
        const newNumber = newNum + newNumeral;
        return compileNumber(String(newNumber), position + 1);
      } else if (position === smallestPosition) {
        const newNumeral = Number(num[position]) + 1;
        const newNumber = newNum + newNumeral;
        return compileNumber(String(newNumber), position + 1);
      }
      const newNumber = newNum + num[position];
      return compileNumber(newNumber, position + 1);
    };
    return compileNumber('', 0);
  };
  const screenText = (originalNum);
  const result = balance(originalNum);
  return makeOperationInfo(result, screenText);
};


const balance = () => {
  const gameRules = 'Balance the given number.';
  const gameType = () => findBalanceNum();
  playGame(gameType, gameRules);
};

export default balance;
