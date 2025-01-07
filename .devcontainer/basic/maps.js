// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2



const mynumber=[1,2,3,4,5,6,7,8,9,10]
const newnumber=mynumber
.map((num) =>
     {
        return num+10
    })
 .map((num)=>
{
    return num+1
}) 
.filter( (num) =>   num>=40)

console.log(newnumber);
