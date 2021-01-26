export const getFirstName = (player: { firstName: string, lastName: string }): string => player.firstName

export const getTotalScore = (player: { score1: number, score2: string }): number =>
  player.score1 + parseInt(player.score2)

export const isGoodScore = (player: { name: string, age: number, score: number }): boolean => 
  player.score >= 50 ? true : false

export const getUserDetails = (user: { name: string, age: number, location: string }): string => 
  `${user.name} aged ${user.age} currently is in ${user.location}.`
