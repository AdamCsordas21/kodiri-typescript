export const negate = (value: boolean): boolean => !value

export const amIAnAdult = (age: number): boolean => age >= 18

export const flagChecker = (flag: boolean): string => flag === true ? `Flag set to true` : `Flag set to false`

export const hasVictoryChances = (isGoodRider: boolean, hasGoodBike: boolean): boolean => isGoodRider && hasGoodBike
