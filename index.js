const counter = document.getElementById("counter");
const inc = document.getElementById("div-one");
const dec = document.getElementById("div-three");
const reset = document.getElementById("reset");

let count = 0;

// function updateCounter(){
//     counter.textContent = count;
// }

 inc.addEventListener("click", function(){
        count++ ;
        
        // console.log(updateCounter);
        // updateCounter();
    counter.innerHTML= count;
      
 });

 dec.addEventListener("click", function(){
    if(count>0){
        count--;
        // counter--;
        // updateCounter();
      counter.innerHTML= count;
    } else {
        // count=0;
        counter= 0;
    }
 });

 reset.addEventListener("click", function(){
    // count=0;
    count = 0;
    // updateCounter();
    counter.innerHTML= count;
 })

//  updateCounter();