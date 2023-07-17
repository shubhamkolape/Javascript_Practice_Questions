
// task 1 

let project = document.querySelector("header nav ul li:nth-child(3)");

project.textContent = 'Projects';


// task 2  create li and add name into it 


let hireme = document.createElement(`li`);

let anchortag = document.createElement(`a`);

anchortag.textContent = `Hire Me`;

anchortag.setAttribute(`href`, `#`);

hireme.appendChild(anchortag);

 let parent = document.querySelector("header nav ul");

 parent.appendChild(hireme)


// task 3  chnage placeholder name 

 
let search = document.querySelector(".search-field input");

search.placeholder = "Search My Project";

// task 4 chnage company name 

let text = document.querySelectorAll(".hero-left-section p span");

text[1].innerText = "an Employee";
text[2].innerText = "iNeuron Intelligence Pvt Ltd.";





// change photo 


let photo = document.querySelector(".hero-right-section img");
photo.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"





// task 5  create button


let value = document.querySelector(".hero-right-section-btns ");

let button = document.createElement("button");

button.textContent = 'Support Me';

value.appendChild(button);
