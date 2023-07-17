let parent = document.querySelector(".recipe-gallery");


let div = document.createElement("div");
let link = document.createElement("a");
let image = document.createElement("img");
let heading = document.createElement("h5");
let paragraph = document.createElement("p");



div.classList.add("card")

div.appendChild(link);


link.classList.add("recipe-text")

link.style.cursor = "pointer"


link.appendChild(image);


image.classList.add("recipe-img");


image.src = "https://pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg";




link.appendChild(heading);

heading.classList.add("recipe-name");

heading.textContent = "Misal Pav";


link.appendChild(paragraph);


paragraph.classList.add("recipe-disp");

paragraph.textContent = "Prep : 15min | Cook : 20min"


parent.appendChild(div);





















