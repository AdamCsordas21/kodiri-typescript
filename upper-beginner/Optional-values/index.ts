export const checkEmail = (name: string, email?: string): string =>
  email ? `Email provided` : `Email not provided`

export const findFirstPositiveNum = (list: number[]): number | string =>
  list.find(n => n > 0) || `No positive number available`

export const sum = (num1: number, num2: number, num3?: number) => num1 + num2
