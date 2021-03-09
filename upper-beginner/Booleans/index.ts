export const negate = (value: boolean): boolean => {
  if (value === true) {
    return false
  }
  if(value === false) {
    return true
  }
}
