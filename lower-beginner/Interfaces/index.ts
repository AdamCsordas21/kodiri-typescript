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
