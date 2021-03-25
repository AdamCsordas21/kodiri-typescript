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

interface FootballPlayer {
  personal: {
    name: string
    age: number
  }
  position: string
}

export const getPersonalDetails = (player: FootballPlayer): {} => player.personal

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
