
let questions = document.querySelectorAll(".question");
 
for(let question of questions){
   question.addEventListener("click", (event) => {
      event.target.classList.toggle("active");
 
      if(event.target.nextElementSibling.style.maxHeight == 0){
         event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
      }else{
         event.target.nextElementSibling.style.maxHeight = "";
      }
   });
}

function toggleMenu() {
   var nav = document.getElementById('nav');
   nav.classList.toggle('active');
}

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});