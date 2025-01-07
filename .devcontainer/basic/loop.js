// let myarray=[2,4,6,8,10,12]
// for(let i=0; i<myarray.length; i++)

// {
//     if(i==2)
//     {
//         console.log(`the middle number in array is: ${i}`)
//         continue;
//     }
//     console.log(`the index in array : ${i}`)
// }

let myarray=[2,3,4,5,6,7,8,9]
let i=0;
while(i<myarray.length)
{
    i++;
    if(i==3)
    {
        console.log(`the middle number is: ${myarray[i]} `)
       
        break;
      
    }
    
    console.log(`the array number is : ${myarray[i]}`)
}