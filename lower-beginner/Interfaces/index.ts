interface Politician {
  firstName: string,
  lastName: string
}

export const getFirstName = (person: Politician): string => {
  return person.firstName
}