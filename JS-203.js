for (let i = 0; i < 8; i++) {
  let a = "";
  for (let j = 0; j < 4; j++) {
    if (i % 2 == 0) {
      a += " ";
      a += "#";
    } else {
      a += "#";
      a += " ";
    }
  }
  console.log(a);
}
