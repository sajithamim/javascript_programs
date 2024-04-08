// Writa a fn to find out the factorial that takes a non-negative number as input and returns its fact

const fact = (num) => {
  let factorial = 1

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i
  }
  return factorial
}

console.log('factorial', fact(5))
