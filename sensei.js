class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, health = 200, speed= 10, strength);
        this.name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"