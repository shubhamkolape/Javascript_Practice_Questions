let languages = document.querySelectorAll(".main__languages a");

for(let i = 0; i< languages.length; i++){
 let language = languages[i]

if(language.textContent.includes("2.0")){

    language.remove();
}
}






let input = document.querySelector(".main__form-input")

input.disabled = false;

let button = document.querySelector(".main__form-btn");

button.disabled = false;


const form = document.querySelector('form'); 
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const input = document.querySelector('input'); 
  const inputValue = input.value; 
  window.location.reload(); 
})


// The preventDefault() method is used to
// prevent the default action of an event from
// occurring. For example, if you have a form
// with a submit button, calling preventDefault()
// on the submit button click event will prevent
// the form from submitting and the page from
// refreshing.


