/**
 * @param s sleep time in seconds
 * @returns Promise<void>
 */
export const sleep = async (s: number) => {
  return new Promise(resolve => setTimeout(resolve, s * 1000))
}
