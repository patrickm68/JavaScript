/*
  Problem: Given two numbers, n and k, make all unique combinations of k numbers from 1 to n and in sorted order

  What is combinations?
  - Combinations is selecting items froms a collections without considering order of selection

  Example:
  - We have an apple, a banana, and a jackfruit
  - We have three objects, and need to choose two items, then combinations will be

  1. Apple & Banana
  2. Apple & Jackfruit
  3. Banana & Jackfruit

  To read more about combinations, you can visit the following link:
  - https://betterexplained.com/articles/easy-permutations-and-combinations/

  Solution:
  - We will be using backtracking to solve this questions
  - Take one element, and make all them combinations for k-1 elements
  - Once we get all combinations of that element, pop it and do same for next element
*/

class Combinations {
  constructor (n, k) {
    this.n = n
    this.k = k
    this.combinationArray = [] // will be used for storing current combination
  }

  findCombinations (high = this.n, total = this.k, low = 1) {
    if (total === 0) {
      console.log(this.combinationArray)
      return
    }
    for (let i = low; i <= high; i++) {
      this.combinationArray.push(i)
      this.findCombinations(high, total - 1, i + 1)
      this.combinationArray.pop()
    }
  };
}

/*
  Driver Code

  Test Case 1: n = 3, k = 2
  Test Case 2: n = 4, k = 2
*/

console.log('\nFirst Test Case')
const test1 = new Combinations(3, 2)
test1.findCombinations()

console.log('\nSecond Test Case')
const test2 = new Combinations(4, 2)
test2.findCombinations()
