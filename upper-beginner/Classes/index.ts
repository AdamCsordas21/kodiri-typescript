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
