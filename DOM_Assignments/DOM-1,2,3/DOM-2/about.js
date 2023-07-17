let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



let heading = document.querySelectorAll(".accordian h3");

heading.forEach((element)=>{
  element.style.backgroundColor = "#dadafe"
})


let paragraph = document.querySelectorAll(".accordian p");

paragraph.forEach((element)=>{
  element.style.backgroundColor = "pink"
});



// add skills section


let parent = document.querySelector(".accordian-wrapper");

let element = document.createElement("div");

element.className = "accordian";

let head = document.createElement("h3");

head.innerText = "Skills";

let para = document.createElement("p");

para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN can be seen in my work over the GitHub";

para.style.display = "none";

element.appendChild(head);

element.appendChild(para);

parent.appendChild(element);

head.addEventListener('click', function(){
  if (para.style.display === 'none'){
    para.style.display = 'block';
  }
  else{
    para.style.display = 'none';
  }
});


head.style.backgroundColor = "#dadafe";

para.style.backgroundColor = "pink";


