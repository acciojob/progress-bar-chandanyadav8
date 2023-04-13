const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const line=document.querySelectorAll(".line");

let currentActive = 0;
let currentLIne=0;

prevBtn.addEventListener("click", () => {
  circles[currentActive - 1].classList.remove("active");
  currentActive--;
  if(currentLIne>0)
  {  
  line[currentLIne-1].classList.remove("active");
  currentLIne--;
  }

  if (currentActive === 0) {
    prevBtn.disabled = true;
  }

  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  circles[currentActive ].classList.add("active");
  currentActive++;
  if(currentLIne<line.length)
  {  line[currentLIne ].classList.add("active");
  currentLIne++;
}

  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  }

  prevBtn.disabled = false;
});
