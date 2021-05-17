export function random(bound: number) {
  return Math.random() * bound
}

export type RandomNumberArrayOptions = {
  readonly limit: number
}

export function randomNumberArray({ limit }: RandomNumberArrayOptions) {
  return Array<number>(limit)
    .fill(0)
    .map(() => Math.floor(random(limit)))
}
