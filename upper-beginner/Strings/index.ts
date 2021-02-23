export const concatenate = (a: string, b: string): string => a + b

export const concatenateTwo = (wordOne: string, wordTwo: string): string => `${wordOne} ${wordTwo}`

export const concatenateThree = (wordOne: string, wordTwo: string, wordThree: string): string =>
  `${wordOne} ${wordTwo} ${wordThree}`
  
export const getSize = (input: string): number => input.length

export const convertIntoSmallCase = (sentence: string): string => sentence.toLowerCase()

export const convertIntoBigCase = (sentence: string): string => sentence.toUpperCase()
