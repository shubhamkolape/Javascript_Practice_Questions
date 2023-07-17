let scroll = document.querySelector(".col-lg-4");

scroll.style.overflow ="scroll";


document.body.style.backgroundImage = "none";   



// hamburger 


hamburgerimage = document.querySelector(".navbar-toggler-icon");

hamburgermenu = document.querySelector(".collapse");



hamburgerimage.addEventListener('click', function(){
  

        if(hamburgermenu.style.display === "block"){
            hamburgermenu.style.display = "none"
        }
        else{
            hamburgermenu.style.display = "block"

        }

});



