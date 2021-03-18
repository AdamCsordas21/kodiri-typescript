export class Greeter {
  greet(): string {
    return 'Hello World!'
  }
}

export class Greeter2 {
  greet(name: string): string {
    return `Hello ${name}`
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
