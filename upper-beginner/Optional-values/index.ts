export const checkEmail = (name: string, email?: string): string => email ? `Email provided` : `Email not provided`

export const findFirstPositiveNum = (list: number[]): number | string => {
  return list.find(n => n > 0) || `No positive number available`
}
