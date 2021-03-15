export const checkEmail = (name: string, email?: string): string =>
  email ? `Email provided` : `Email not provided`

export const findFirstPositiveNum = (list: number[]): number | string =>
  list.find(n => n > 0) || `No positive number available`

export const sum = (a: number, b: number, c?: number) => a + b

export const isNumericList = (list: Array<number | string>): boolean => list.every(n => typeof n === "number")

interface IDrivers {
  name: string
  titles?: number[]
}

export const getDriverTitles = (drivers: IDrivers ): number[] | string => drivers.titles || `No titles yet`
