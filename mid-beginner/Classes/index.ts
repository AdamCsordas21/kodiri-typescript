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
