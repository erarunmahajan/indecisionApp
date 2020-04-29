console.log('ES6 arrow function')

function sqr(x){
    return x*x
}

// const sqrArrow = (x)=>{
//     return x*x
// }

const sqrArrow = (x)=>x*x;

console.log(sqr(8))
console.log(sqrArrow(9))

const getFisrtName = (fullName) => fullName.split(' ')[0]
const getLastName = (fullName) => fullName.split(' ')[1]

console.log(getFisrtName('Arun Mahajan'))
console.log(getLastName('Arun Mahajan'))