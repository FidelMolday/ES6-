for (let i = 0; i < 10; i++) {
  const x = 10;
  console.log(x); // 10

  if (x === 10) {
    const x = 20;
    console.log(x); // 20
  }

  console.log(x); // 10
}
//reinitialized let/const inside Nested scopes
