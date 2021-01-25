export const getFirstElement = (fruits: string[]) => fruits.shift()

export const getListSize = (lists: (string | number)[]): number => lists.length

export const isListLong = (lists: string[]): boolean => lists.length >= 3 ? true : false

export const getFirstOfSecondElement = (list: string[][]): string => list[1][0]

export const reverseList = (list: (string | number | boolean)[]): (string | number | boolean)[] => list.reverse()
