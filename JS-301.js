const min = (prvi, drugi) => {
  if (prvi > drugi) return drugi;
  else return prvi;
};
console.log(min(0, 4));
console.log(min(0, -4));
