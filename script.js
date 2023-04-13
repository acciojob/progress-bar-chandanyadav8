//your JS code here. If required.
// function next(){
//     document.getElementById("circle1").style.backgroundColor="red";
// }
// function prev(){

// }
const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const line=document.querySelectorAll(".line");

let currentActive = 0;
let currline=0;

prevBtn.addEventListener("click", () => {
  circles[currentActive - 1].classList.remove("active");
  currentActive--;
  if(currline>0)
  {  
  line[currline-1].classList.remove("active");
  currline--;
  }

  if (currentActive === 0) {
    prevBtn.disabled = true;
  }

  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  circles[currentActive ].classList.add("active");
  currentActive++;
  if(currline<line.length)
  {  line[currline ].classList.add("active");
    currline++;
}

  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  }

  prevBtn.disabled = false;
});
