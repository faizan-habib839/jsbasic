// function addtwonumber(n1,n2){
  

//  const n3=n1+n2;
//  console.log("the sum of two integer is ",n3)
// }
// addtwonumber(3,5)

// function myname (username){
//     if(username===undefined)
//     {
//         console.log("please enter the name :")
//         return
//     }
//     return `${username} is just logged in page`

// }
// console.log(myname("faizan"))


// function shoppingcartprice(...n1){
//     return n1
// }
// console.log(shoppingcartprice(300,400,300,4000))

const userinfo={
  
    firstname:"ali",
    lastname:"usman",
    marks:23,
    rollno:22,
    school:"aps"

}
function calinfo(anyobject){

    console.log(`personal information is ${anyobject.firstname} ${anyobject.lastname} ${anyobject.marks}`)
}
calinfo(userinfo)