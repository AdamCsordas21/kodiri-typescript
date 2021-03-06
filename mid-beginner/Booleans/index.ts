export const negate = (value: boolean): boolean => !value

export const amIAdult = (age: number): boolean => age >= 18

export const flagChecker = (flag: boolean): string => flag === true ? 'Flag set to true' : 'Flag set to false'

export const hasVictoryChances = (isGoodRider: boolean, hasGoodBike: boolean): boolean => isGoodRider && hasGoodBike

export const amIAwake = (sleepHours: number, coffeeCups: number): boolean => sleepHours >= 8 || coffeeCups >= 2
