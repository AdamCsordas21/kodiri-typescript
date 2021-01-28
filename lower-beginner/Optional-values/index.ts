export const checkEmail = (name: string, email?: string) => email ? 'Email provided' : 'Email not provided'

export const findFirstPositiveNum = (nums: number[]): number | string =>
  nums.find(n => n > 0) || 'No positive number available.'

export const sum = (a: number, b: number, c?: number): number => c ? a + b + c : a + b

export const isNumericList = (list: Array<number | string>): boolean => list.every(n => typeof n === 'number')

interface IDriver {
  name: string,
  titles?: number[]
}

export const getDriverTitles = (driver: IDriver): number[] | string => driver.titles || 'No titles yet'
