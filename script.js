
const hambuerger_btn = document.querySelector(".hameburger")
const cross_btn = document.querySelector(".cross-btn")
const menu_el = document.querySelector(".menu")
const menu_option = document.querySelectorAll(".menu.option")


hambuerger_btn.addEventListener("click" , function(){

    hambuerger_btn.style.display = "none";
    menu_el.style.display = "block"
    
})

cross_btn.addEventListener("click" , function(){
    menu_el.style.display = "none"
    hambuerger_btn.style.display = "block"
})

for (let i = 0; i < menu_option.length; i++) {
    menu_option[i].addEventListener("click", function(){
        menu_el.style.display = "none"
    })

    
  }
  

