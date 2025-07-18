let mobileMenuActivisated = false
let invisible_screen = document.getElementById("invisible_screen")
function MenuManage() {
    let arrow = document.getElementById("menu-arrow")
    let topMenuButtons = document.getElementById("top-menu_buttons")
    let content = document.getElementById("header-content")
    if (!mobileMenuActivisated) {
        mobileMenuActivisated = true
        arrow.style.rotate = "90deg"
        topMenuButtons.style.top = "10vh"
        content.style.filter = "blur(10px)"
        invisible_screen.style.display = "block"
    }
    else if (mobileMenuActivisated) {
        mobileMenuActivisated = false
        arrow.style.rotate = "0deg"
        topMenuButtons.style.top = "-60vh"
        content.style.filter = "none"
        invisible_screen.style.display = "none"
    }
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("menu-activator")) {
        MenuManage()
    }

    if (e.target.classList.contains("menu-disactivator") && mobileMenuActivisated) {
        MenuManage()
    }

    if (e.target.classList.contains("link_1")) { 
        document.location = "/index.html"
    }
    else if (e.target.classList.contains("link_2")) { 
        // document.location = "/index.html"
    }
    else if (e.target.classList.contains("link_3")) { 
        document.location = "/galery.html"
    }
    else if (e.target.classList.contains("link_4")) { 
        // document.location = "/index.html"
    }
    // console.log(e.target)
})

document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
})


document.getElementById("button_text_1").addEventListener("click", function(e) {
    document.location = "/index.html"
})
document.getElementById("button_text_2").addEventListener("click", function(e) {
    // document.location = "/galery.html"
})
document.getElementById("button_text_3").addEventListener("click", function(e) {
    document.location = "/galery.html"
})
document.getElementById("button_text_3").addEventListener("click", function(e) {
    // document.location = "/galery.html"
})