export const concatenate = (a: string, b: string): string => a + b

export const concatenateTwo = (firstWord: string, secondWord: string): string => `${firstWord} ${secondWord}`

export const concatenateThree = (firstWord: string, secondWord: string, thirdWord: string): string =>
  `${firstWord} ${secondWord} ${thirdWord}`

export const getSize = (word: string): number => word.length
  
export const convertIntoLowCase = (sentence: string): string => sentence.toLowerCase()

export const convertIntoBigCase = (sentence: string): string => sentence.toUpperCase()
