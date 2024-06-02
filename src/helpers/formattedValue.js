export const formattedValue = value => {
  return value.replace(/(\d)([a-zA-Z])/g, '$1 $2');
};
