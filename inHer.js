
/* class Animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} drinks milk`;
    }
}

class Dog extends Animal {
    constructor(name,age,lives=9){
        super(name,age);
        this.lives = lives;
    }
    barks(){
        return 'still barking UFFFF!';
    }
    ages(){
        return `dog live only for ${this.lives}`;
    }
}

class cat extends Dog{
    purrs(){
        return 'still so cute';
    }
} */

/* const pet = new Dog('Writt',13);
pet.eat() */

class Operations {
    constructor(a, b) {
        this.a = parseInt(a);
        //this.b = parseInt(b);
    }
   /*  mult() {
        console.log(`Product: ${this.a * this.b}`);
    } */
    square() {
        console.log(`Square: ${this.a * this.a}`);
    }
}


    