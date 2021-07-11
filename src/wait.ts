export function wait(seconds: number): Promise<(value: unknown) => void> {
  return new Promise((res) => setTimeout(res, seconds))
}
