console.log('in arrow function part 2')
// arguments object - no longer with arrow function
const add = function(a,b){
    console.log('here arguments objects are accesible in the function other than passed')
    console.log(arguments)
    return a+b;
}
console.log(add(15,20,100,200))

const add1 = (a,b)=>{
    console.log('Oobjects are not accessible in the arrow function')
    // console.log(arguments) this will generates the error 'undefined arguments'
    return a+b;
}
console.log(add1(100,200,200))

//this keyword - no longer required

const user = {
    name:'Arun',
    cities: ['jammu','kathua','chandihgarh'],
    printPlacesLived:function(){
        const that = this;
        this.cities.forEach(function(city){
            console.log(that.name + ' has lived in '+ city)
        })
    }
}

user.printPlacesLived()

const user1 = {
    name:'Arun',
    cities: ['jammu','kathua','chandihgarh'],
    printPlacesLived(){
        return this.cities.map((city)=>this.name +' has lived in '+city.toUpperCase() +'!!')

        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has lived in '+ city)
        // })
    }
}
console.log(user1.printPlacesLived())

const multiplier ={
    numbers : [1,2,3,4,5,6],
    multiplyBy : 5,
    multiplication(){
        return this.numbers.map((num)=>num*this.multiplyBy)
    }
}
console.log(multiplier.multiplication())