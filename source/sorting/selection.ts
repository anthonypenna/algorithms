import { log } from "console"
import { swap } from "../helpers/array"
import { withDuration } from "../helpers/performance"
import { randomNumberArray } from "../helpers/random"

function selectionSort(numbers: number[]): number[] {
  const results: number[] = [...numbers]
  let minIndex: number
  for (let i = 0; i < results.length; i++) {
    minIndex = i
    for (let j = i + 1; j < results.length; j++) {
      if (results[j] < results[minIndex]) minIndex = j
    }
    swap(results, i, minIndex)
  }
  return results
}

const unsortedNumbers = randomNumberArray({ limit: 100_000 })
log("Selection sort", unsortedNumbers)
log(" - Before ->", unsortedNumbers)

const [sortedNumbers, duration] = withDuration(() => selectionSort(unsortedNumbers))
log(" - After ->", sortedNumbers)
log(" - Duration ->", duration)
