import { log } from "console"
import { withDuration } from "./helpers/performance"
import { randomNumberArray } from "./helpers/random"
import { bubbleSort } from "./sorting/bubble"

log("Bubble sort:")

const unsortedNumbers = randomNumberArray({ limit: 100_000 })
log(" - Before ->", unsortedNumbers)

const [sortedNumbers, duration] = withDuration(() => bubbleSort(unsortedNumbers))
log(" - After ->", sortedNumbers)
log(" - Duration ->", duration)
