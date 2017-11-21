const randomInt = (min, max) => {
  const random = ((min - 0.5) + Math.random()) * ((max - min));
  console.log(Math.round(random));
  return Math.round(random);
};

randomInt(1, 3);
