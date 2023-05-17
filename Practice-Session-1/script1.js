// console.log('Hello Javascript World');
// const name = prompt("What is your name ?")
// alert(`Hello World : ${name}`);
// console.warn("Take care of your self");

// 2)  Array Creation

const a = ['Python', 'Javascript', 'C']
console.log(a);

a.push('Java'); // add element at last
a.unshift('Dart'); // add element at first 0th index
console.log(a);

a.pop(); // delete last element
a.shift(); // delete first element
console.log(a);

// 3) Looping on Array : 3 Types 
                // 1) for loop, 
/*
                console.log("\n\t Array Looping Using simple for loop : ");
                for(let i=0; i<a.length; i++){
                    console.log(a[i]);
                }

                // 2) forEach loop,
                console.log("\n\t Array Looping Using  forEach loop : "); 
                a.forEach((element) => {

                    console.log(element);

                })

                // 3) for of loop
                console.log("\n\t Array Looping Using for  ofloop : ");
                for(let i of a){
                    console.log(i);
                }

*/

// 4) Array of Objects

const actor = [

    {
        name: "Actor 1",
        payment : 100
    },
    {
        name: "Actor 2",
        payment : 200
    },
    {
        name: "Actor 3",
        payment : 300
    },
    {
        name: "Actor 4",
        payment : 400
    }
]

console.log(actor);
console.log('Actor array of objects length : ' + actor.length);

// print array of objects :
for(let i =0; i< actor.length; i++){
    console.log(actor[i]);
}

// minus 10  payment for each actor and print

actor.forEach(element => {
    
    element.payment = element.payment - 10;
    console.log(`Actor ${element.name} Payment is : ${element.payment}`)
});
// minus 10  payment for of actor and print

for(let element of actor){
    
    element.payment = element.payment - 10;
    console.log(`Actor ${element.name} Payment is : ${element.payment}`)
}