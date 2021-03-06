import { log } from "console"
import { swap } from "../helpers/array"
import { withDuration } from "../helpers/performance"
import { randomNumberArray } from "../helpers/random"

function bubbleSort(numbers: number[]): number[] {
  const results: number[] = [...numbers]
  let hasntSwapped = true
  for (let i = 0; i < results.length; i++) {
    for (let j = i; j < results.length; j++) {
      if (results[i] > results[j]) {
        swap(results, i, j)
        hasntSwapped = false
      }
    }
    if (hasntSwapped) return results
  }
  return results
}

const unsortedNumbers = randomNumberArray({ limit: 100_000 })
log("Bubble sort", unsortedNumbers)
log(" - Before ->", unsortedNumbers)

const [sortedNumbers, duration] = withDuration(() => bubbleSort(unsortedNumbers))
log(" - After ->", sortedNumbers)
log(" - Duration ->", duration)
