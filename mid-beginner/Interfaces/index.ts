interface Politician {
  firstName: string
  lastName: string
}

export const getFirstName = (person: Politician): string => person.firstName

interface Politician2 {
  name: {
    first: string
    last: string
  }
  age: number
}

export const getFirstName2 = (person: Politician2): string => person.name.first

interface Footballer {
  personal: {
    name: string
    age: number
  }
  position: string
}

export const getPersonalDetails = (player: Footballer): {} => player.personal

interface Query {
  director: string
  year: number
}
interface Movie {
  title: string
  score: number
}

export const getMovie = (query: Query): Movie => {
  return { title: 'Terminator', score: 87.3 }
}
