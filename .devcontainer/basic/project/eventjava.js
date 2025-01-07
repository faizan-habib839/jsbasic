let btnclick=document.getElementById('btn').addEventListener( 'click' , function(){
    alert('file submited sucessfully ');
    console.log(btnclick);
});

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("keydown" , () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
// const btn1= document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange(e) {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   e.target.style.backgroundColor = rndCol;
//   console.log(e);
// }

// btn1.addEventListener("click", bgChange);