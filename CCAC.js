// DOM functionalities 
// mobile menu toggle 
const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarItens = document.querySelectorAll("#nav-links a");

navbarBurger.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    navbarItens.forEach(item => {
        item.addEventListener("click", () => {
            navbarMenu.classList.remove("is-active");
        })
    })
})

//tabs - está sendo renderizado na função que puxa os items da DB.
function tabsManager(){
    const tabs = document.querySelectorAll(".tabs li");
    const tabContentBoxes = document.querySelectorAll("#tab-content > div");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(item => {
                item.classList.remove("is-active");
                tab.classList.add("is-active");

                const target = tab.dataset.target;
                tabContentBoxes.forEach(box => {
                    if (box.getAttribute("id") === target){
                        box.classList.remove("is-hidden");
                    }else {
                        box.classList.add("is-hidden");
                    }
                })
            })
        })
    })
}
tabsManager()

// modal
// const signupButton = document.querySelector("#sign-up");
// const modalBackground = document.querySelector(".modal-background");
// const modal = document.querySelector(".modal");

// signupButton.addEventListener("click", () => {
//     modal.classList.toggle("is-active");
// })

// modalBackground.addEventListener("click", () => {
//     modal.classList.toggle("is-active");
// })


  