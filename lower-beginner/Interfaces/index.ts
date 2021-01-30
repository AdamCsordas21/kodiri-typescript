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

export const getFirstName2 = (person: Politician2): string => person.name.first

interface footballPlayer {
  personal: {
    name: string,
    age: number
  },
  position: string
}

export const getPersonalDetails = (player: footballPlayer): {} => player.personal

interface Query {
  director: string,
  year: number
}

interface Movie {
  title: string,
  score: number
}

export const getMovie = (query: Query): Movie => {
  return { title: 'Terminator', score: 87.3 }
}

interface Movie2 {
  title: string,
  year: number,
  isGood: boolean
}

export const getMovie2 = (query: string): Movie2 =>
  query ? { title: 'Terminator', year: 1991, isGood: true } : undefined
