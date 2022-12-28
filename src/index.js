module.exports = function reverse (n) {
  let number = Math.abs(n)
  let numberReverse = Number(number.toString().split('').reverse().join(''))
  return numberReverse
}

// function reverse (n) {
//   let number = Math.abs(n)
//   let numberReverse = Number(number.toString().split('').reverse().join(''))
//   return numberReverse
// }

// console.log(reverse(123))
// console.log(reverse(-123))
