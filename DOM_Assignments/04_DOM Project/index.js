let parent = document.querySelectorAll(".clash-card__unit-stats");

const colors = ["#EC9B3B",  "#EE5487" , "#F6901A", "#82BB30", "#4FACFF"];

parent.forEach((eleme, index)=>{
        eleme.style.backgroundColor = colors[index];
})




// parent[0].style.backgroundColor = "#EC9B3B";
// parent[1].style.backgroundColor = "#EE5487";
// parent[2].style.backgroundColor = "#F6901A";
// parent[3].style.backgroundColor = "#82BB30";
// parent[4].style.backgroundColor = "#4FACFF";

let text = document.querySelectorAll(".one-third")


text.forEach((element)=>{
    element.style.color = "white"
})


// change name 


let changename = document.querySelector(".archer div:nth-child(3)");

changename.textContent = "The Archer";


let gobin = document.querySelector(".goblin div:nth-child(3)");

gobin.textContent = "The Gobin";