export function bubbleSort(numbers: number[]): number[] {
  const results: number[] = [...numbers]
  let hasntSwapped = true
  for (let i = 0; i < results.length; i++) {
    for (let j = i; j < results.length; j++) {
      if (results[i] > results[j]) {
        let temp = results[i]
        results[i] = results[j]
        results[j] = temp
        hasntSwapped = false
      }
    }
    if (hasntSwapped) return results
  }
  return results
}
