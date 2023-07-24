const myName = 'Luis';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  // private age;
  // private name;

  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const luis = new Persona(24, 'Luis');
luis.getSummary;
