export class Greeter {
  greet(): string {
    return `Hello World`
  }
}

export class Greeter2 {
  greet(user: string): string {
    return `Hello ${user}`
  }
}

export class Player {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  getUserName(): string {
    return `${this.name}`
  }
}

export class Player2 {
  private firstName: string
  private lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getUserName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

export class Country {
  private country: string
  private population: number
  constructor(country: string, population: number) {
    this.country = country
    this.population = population
  }
  getCountryPopulation(): string {
    return `${this.population} million people live in ${this.country}`
  }
}
