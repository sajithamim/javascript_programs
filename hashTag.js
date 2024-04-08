// You are required to generate a hashtag from a given input string . The hash tag should be constructed as follows.
// 1. The input string should be convert to a hash tag format, where each word is capitalised and concatenated together without space.
// 2.if the length of input is 280 character or if input tstring is empty or contains only whitespace the function should return false.
// 3. Otherwise the fn should return the generated hastagprefixed with #.

const hashTagFirstSol = (string) => {
  let arr = string.split(' ')
  // First solution
  let str = arr.map((currEle) => currEle.replace(currEle[0], currEle[0].toUpperCase()))
  return `#${str.join('')}`
}

const hashTagSecondSol = (string) => {
    let arr = string.split(' ')
    // Second solution
    let str = arr.map(
      (currEle) => currEle.charAt(0).toUpperCase() + currEle.slice(1)
    )
    return `#${str.join('')}`
  }
console.log(hashTagFirstSol('My name is sajitha'))
console.log(hashTagSecondSol('My name is savitha'))