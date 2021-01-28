interface Politician {
  firstName: string,
  lastName: string
}

export const getFirstName = (person: Politician): string => person.firstName

interface Politician2 {
  name: {
    first: string,
    last: string
  },
  age: number
}

export const getFirstName2 = (person: Politician2) => person.name.first
