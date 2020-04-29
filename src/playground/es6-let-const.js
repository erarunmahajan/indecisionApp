console.log('es6-let-const js is running')
// var variable can be reassigned and redefined so too much vulnerably
let nameLet = 'Jan'
console.log('nameLet',nameLet)
// let variable cannot be redefinded but can be re assigned 

const nameConst = 'Arun'
console.log('NameCOnst',nameConst)
// const variable cannot b reassigned as well as cannot be re definded

// scope
function getPetName(){
    var petname = 'caty';
    return petname
}
// scope of var variable is limited to its function and cannot be accessed outside the function i.e local to that function

console.log('petname',getPetName());

// block scopping let and const are block scopped 
// var are function based
var fullName = 'Arun Mahajan';
let lname
if(fullName){
    var firstName = fullName.split(' ')[0]
    const lastname = fullName.split(' ')[1]
    lname =fullName.split(' ')[1]
    console.log(firstName)
    console.log(lastname)
}
console.log(firstName)
console.log(lname)

// console.log(lastname) // it will not print since const are block level and doesnot allow to access from the outside of the block





