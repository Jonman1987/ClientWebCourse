function Animals(name) {
    this.name = name;
}

Animals.prototype.speak = function() {
    console.log(`${this.name} издает звук`);
}

function Cat(name) {
    Animals.call(this, name);
}

Object.setPrototypeOf(Cat.prototype, Animals.prototype);

Cat.prototype.speak = function() {
  console.log(`${this.name} мяукает`);
}

function Dog(name) {
    Animals.call(this, name);
}

Object.setPrototypeOf(Dog.prototype, Animals.prototype);

Dog.prototype.speak = function() {
  console.log(`${this.name} лает`);
}

function animalsExample() {
    const animal = new Animals("Тигр");
    animal.speak();
} animalsExample();


function catExample() {
    const cat = new Cat("Кошка Муся");
    cat.speak();
} catExample();

function dogExample() {
    const dog = new Dog("Собака Чарли");
    dog.speak();
} dogExample();

class Animals1 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }
}

class Cat1 extends Animals1 {
    speak() {
        console.log(`${this.name} мяукает`);
    }
}

class Dog1 extends Animals1 {
    speak() {
        console.log(`${this.name} гавкает`);
    }
}

const tiger = new Animals1("Тигр");
const cat1 = new Cat1("Кошка Муся");
const dog1 = new Dog1("Собака Чарли");
tiger.speak();
cat1.speak();
dog1.speak();