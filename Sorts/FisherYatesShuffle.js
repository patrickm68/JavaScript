export const shuffle = (array) => {
  let maxLength = array.length,
    temp,
    idx

  // While there remain elements to shuffle...
  while (maxLength) {
    // Pick a remaining element...
    idx = Math.floor(Math.random() * maxLength--)

    // And swap it with the current element
    temp = array[maxLength]
    array[maxLength] = array[idx]
    array[idx] = temp
  }

  return array
}

const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
console.log('array', array)

const mixedArray = shuffle(array)
console.log('mixedArray', mixedArray)
