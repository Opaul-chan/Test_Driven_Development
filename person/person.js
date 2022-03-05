class Person {
    constructor(name,power){
        //this._name = name เป็นการเขียนแบบPrivate
        //this.name = name เป็นการเขียนแบบPublic
        this.name = name
        this.power = power
    }
    eat(power){
        this.power += power;
    }
    run(hour){
        if(hour < 0){
            throw new Error('Hour less than zero')
        }
        this.power -= hour *2;
    }
}

module.exports = Person