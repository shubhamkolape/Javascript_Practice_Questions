// let parent = document.querySelector(".mainLeftDetails");

// let inputfiled = parent.querySelectorAll("input");

// inputfiled[0].removeAttribute('readOnly');
// inputfiled[0].setAttribute("placeholder","FSJS 2.0");

// inputfiled[1].removeAttribute("readOnly","readOnly");
// inputfiled[1].setAttribute("placeholder","fsjs@ineuron.ai");

// let textarea = parent.querySelectorAll("textarea");

// textarea[0].removeAttribute("readOnly","readOnly");
// textarea[0].setAttribute("placeholder","Hello Web Developer");


// user input board 


// let rightsection = document.querySelector(".mainRight");

// let input = rightsection.querySelectorAll("input");

// let area = rightsection.querySelectorAll("textarea");

// input[0].placeholder = "FSJS 2.0";
// input[1].placeholder = "fsjs@ineuron.ai";
// area[0].placeholder = "Welcome to the JS world"



let myform = document.querySelectorAll("form");

myform[1].addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.querySelector(".userName");
  let email = document.querySelector(".userEmail");
  let message = document.querySelector(".userMessage");

  let setName = document.querySelector(".enterName");
  let setEmail = document.querySelector(".enterMail"); 
  let setMessage = document.querySelector(".enterMessage");

  setName.value = name.value;
  setEmail.value = email.value;
  setMessage.value = message.value;
});