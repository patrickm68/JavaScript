/*
 * Cocktail Shaker Sort is an algorithm that is a Bidirectional Bubble Sort.
 * The algorithm extends bubble sort by operating in two directions.
 * While it improves on bubble sort by more quickly moving items to the beginning of the list,
 * it provides only marginal performance improvements.
 *
 * Wikipedia (Cocktail Shaker Sort): https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * Wikipedia (Bubble Sort): https://en.wikipedia.org/wiki/Bubble_sort
 *
 */
function cocktailShakerSort (items) {
  for (let i = items.length - 1; i > 0; i--) {
    let swapped = false
    let j

    // Backwards
    for (j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
        swapped = true
      }
    }

    // Forwards
    for (j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]]
        swapped = true
      }
    }
    if (!swapped) {
      return
    }
  }
}

/**
* Implementation of Cocktail Shaker Sort
*/
var ar = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log(ar)
cocktailShakerSort(ar)
// After Sort
console.log(ar)
