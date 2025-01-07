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