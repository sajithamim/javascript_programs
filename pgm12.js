const multiplication = (num) => {
  for (let i = 0; i <= 10; i++) {
    let result = num * i;
    console.log("table", `${num} * ${i} = ${result}`);
  }
};
multiplication(5);
