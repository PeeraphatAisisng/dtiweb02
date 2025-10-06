// break, continue ใน Loop
for (let a = 1; a <= 5; a++) { //++a, a = a + 1, a += 1
  if (a === 3) {
    break;
  }
  console.log(`${a} SAU`);
}
console.log(`++++++++++++++++++++++++++++`);
for(let b = 1; b <= 5; b = b + 1){
    if(b === 3){
        continue;
    }
    console.log(`${b} SAU`)
}