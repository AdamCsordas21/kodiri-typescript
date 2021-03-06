export const negate = (value: boolean): boolean => !value

export const amIAnAdult = (age: number): boolean => age >= 18 ? true : false

export const flagChecker = (flag: boolean): string => flag === true ? 'Flag set to true' : 'Flag set to false'

export const hasVictoryChances = (isGoodRider: boolean, hasGoodBike: boolean) => isGoodRider && hasGoodBike

export const amIAWake = (sleepHours: number, coffeeCups: number): boolean => sleepHours >= 8 || coffeeCups >= 2
