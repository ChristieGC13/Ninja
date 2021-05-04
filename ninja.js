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
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();