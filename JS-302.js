function istiZnakovi(str) {
  let br = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      br++;
    }
  }
  return br;
}

console.log(istiZnakovi("baaaccd"));
console.log(istiZnakovi("ba2dll"));
