// get by index and get index 
/*
let box=document.body.getElementsByClassName("box");
box[0].style.backgroundColor="lime"

box[1].style.backgroundColor="brown"

box[2].style.backgroundColor="yellow"

box[3].style.backgroundColor="pink"

box[4].style.backgroundColor="green"

use in the static elements 
if we add the  element then it will apply on the same index 


*/



/* by get id 
document.getElementById("box1").style.backgroundColor ="red"
*/



// BY ON qureyselector


// for single 
// document.querySelector(".box").style.backgroundColor="green"


// for all

document.querySelectorAll(".box").forEach(e=>{
e.style.backgroundColor="green"

})


