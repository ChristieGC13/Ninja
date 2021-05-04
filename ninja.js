class Ninja  {
    constructor (name, health = 100, speed = 3, strength = 2) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    } 

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, health = 200, speed= 10, strength = 10);
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

    speakWisdom () {
        const drink = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"