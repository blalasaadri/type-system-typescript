// We are using function overloading here, which sadly does not work with fat arrow functions (as far as I can tell)
// Check https://www.typescriptlang.org/docs/handbook/functions.html#overloads for details

function getMax(a: number, b: number): number
function getMax(a: string, b: string): string
function getMax(a: boolean, b: boolean): boolean
function getMax<T>(a: T, b: T): T
function getMax(a: any, b: any): any {
  const typeOfA = typeof a
  const typeOfB = typeof b
  if (typeOfA !== typeOfB) {
    throw new Error(`Cannot compare type ${typeOfA} with ${typeOfB}`)
  }
  if (typeOfA === "object") {
    return JSON.stringify(a) > JSON.stringify(b) ? a : b
  }
  return a > b ? a : b
}

export { getMax }
