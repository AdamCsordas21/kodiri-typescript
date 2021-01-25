export const getFirstElement = (fruits: string[]) => fruits.shift()

export const getListSize = (lists: (string | number)[]): number => lists.length

export const isListLong = (lists: string[]): boolean => lists.length >= 3 ? true : false

export const getFirstOfSecondElement = (list: string[][]): string => list[1][0]
