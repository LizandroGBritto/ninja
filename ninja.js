class Ninja{
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health`);
    }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();