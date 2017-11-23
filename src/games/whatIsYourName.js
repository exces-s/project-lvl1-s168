import { greeting, findOutName, helloUser } from '..';


const whatIsYourName = (greetingPhrase) => {
  console.log(greeting(greetingPhrase));
  const userName = findOutName();
  console.log(helloUser(userName));
  return userName;
};

export default whatIsYourName;
