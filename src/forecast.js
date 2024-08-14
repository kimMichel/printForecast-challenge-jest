export const printForecast = (arg) => {
  if (!Array.isArray(arg) || !arg.every((num) => typeof num == 'number')) {
    throw Error('Invalid type of argument');
  }

  const messages = [];

  arg.map((value, index) => {
    messages.push(`${value}ºC in ${index + 1} days`);
  });

  console.log(messages.join(', '));
};
