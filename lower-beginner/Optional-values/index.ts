export const checkEmail = (name: string, email?: string) => email ? 'Email provided' : 'Email not provided'

export const findFirstPositiveNum = (nums: number[]): number | string =>
  nums.find(n => n > 0) || 'No positive number available.'
