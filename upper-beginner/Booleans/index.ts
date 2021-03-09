export const negate = (value: boolean): boolean => !value

export const amIAnAdult = (age: number): boolean => {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}
