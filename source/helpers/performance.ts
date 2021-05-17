import { performance } from "perf_hooks"

export function withDuration<A>(target: () => A): [A, string] {
  const startTime = performance.now()
  const result = target()
  const endTime = performance.now()
  const seconds = (endTime - startTime) / 1000
  const duration = `${seconds} seconds`
  return [result, duration]
}
