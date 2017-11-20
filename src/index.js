//const readlineSync = require('readline-sync');
import readlineSync from 'readline-sync';

const findOutName = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
};

export default findOutName;
