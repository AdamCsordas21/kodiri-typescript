export const getFirstName = (player: { firstName: string, lastName: string }): string => player.firstName

export const getTotalScore = (player: { score1: number, score2: string }): number => 
  player.score1 + parseInt(player.score2)
