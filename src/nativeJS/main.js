let num1 = 5;
let num2 = num1

num2=7

let user1 = {
    name:"Bob",
    age:23,
    friends:["Alex","Honzo","Ignat"]
}
let user2 = user1

user2.name = 'Alex'
console.log(user2.name)

console.log(typeof NaN) // number
console.log(Number.isNaN(123))  //false
console.log(Array.isArray([])) // true

let copyUser = {...user1}

console.log(copyUser === user1) // false they are same but not identical

const array = [1,2,3,4,5]
//array.push(6) // mutability!! don't do it
const copyArray = [...array,6];
console.log(copyArray)

const deepCopy = {...user1, friends: [...user1.friends, "Lera"]}

console.log(user1)
console.log(deepCopy)
