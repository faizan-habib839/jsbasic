// const myArray=[2,4,6,8,10,12,14];
// console.log(myArray[2]);
// console.log(myArray.push(16));
// console.log(myArray.push(18));
// console.log(myArray.pop());
// console.log(myArray);


// console.log(myArray.pop());

// const profile= {
//   name:"faizan",
//   class:"bs se",
//   rollno:23,
//   section:"a",
//   bio: function() {
//      console.log(`my name is ${this.name} i am the student of ${this.class} rollno is ${this.rollno}  section ${this.section} `)
//   }
// }

// console.log(profile.bio());


const target = { a: 1, d: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);
