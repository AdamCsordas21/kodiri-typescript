export const checkEmail = (name: string, email?: string): string => {
  if (email) {
    return `Email provided`
  } else {
    return `Email not provided`
  }
}
