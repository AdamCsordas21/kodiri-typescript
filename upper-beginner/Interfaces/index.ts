interface Politician {
  firstName: string
  lastName: string
}

export const getFirstName = (person: Politician): string => person.firstName

interface Politician2 {
  name: {
    firstName: string
    lastName: string
  }
  age: number
}

export const getFirstName2 = (person: Politician2) => person.name.firstName

interface Footballer {
  personal: PlayerDetails
  position: string
}

interface PlayerDetails {
  name: string
  age: number
}

export const getPersonalDetails = (player: Footballer): PlayerDetails => player.personal

interface Query {
  director: string
  year: number
}

interface Movie {
  title: string
  score: number
}

export const getMovie = (movie: Query): Movie => {
  return { title: 'Terminator', score: 87.3 }
}

interface Movie2 {
  title: string
  year: number
  isGood: boolean
}

export const getMovie2 = (query: string): Movie2 =>
  query ? { title: 'Terminator', year: 1991, isGood: true } : undefined
