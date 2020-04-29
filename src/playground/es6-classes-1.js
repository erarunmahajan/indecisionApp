console.log("es6-classes-1 is running")

class Person{
    constructor(name = 'Anony', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        // return 'Hie Iam ' +this.name + '!'
        return `Hi I am ${this.name}, I am well what abt u?`; //template string
    }
    getDecription(){
        return `Hi I am ${this.name} and I am ${this.age} year(s) old !!`;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major =major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDecription(){
        let description = super.getDecription();
        if(this.hasMajor()){
            description+= ` Their major is '${this.major}'`
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreetings(){
        let greetings = super.getGreetings();
        if(this.hasLocation()){
            greetings+= ` My Location is ${this.location}`;
        }
        return greetings;
    }
}



const me = new Traveller('Arun Mahajan',31,'Computer Science');
console.log(me)
console.log(me.getGreetings());

const other = new Student(undefined,undefined,'NoWhere');
console.log(other)
console.log(other.getDecription());