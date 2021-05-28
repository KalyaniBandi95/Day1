
// const person = Object.freeze({age:20})

// person.age = 30;

// console.log("Person age is " + person.age)



//Default parameter
// function SayHello(welcomeMessage = "Hey....."){
//     console.log(welcomeMessage);
// }

// SayHello();
// SayHello("Welcome to my APP");



// Rest function
function add(...input){
    let total = 1;
    for(const a of input){
        total += a;
    }
    console.log(total)
}

add(4,2);



//Spread operator
// const data1 = [1,4,6,8,9]
// const data2 = [7,5,3]

// const newdata = [...data1,...data2]

// console.log(newdata)




//Arrow function
// let add = (x,y) => {
//     return x+y;
// }

// console.log(add(20,30));


//predefined function
// let number = [4,6,8]
// number.sort(function(a,b){
//     return b-a;
// })

// // number.sort((a,b) => b-a)
// console.log(number);


// function Car(){
//     this.speed = 0;
//     this.speedup = function(speed){
//         this.speed = speed;
//         setTimeout(() => {
//             console.log(this.speed);
//         }, 1000);
//     }
// }

// let car = new Car()

// car.speedup(100)
