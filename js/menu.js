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
        content.style.filter = "blur(5px)"
        invisible_screen.style.display = "block"
    }
    else if (mobileMenuActivisated) {
        mobileMenuActivisated = false
        arrow.style.rotate = "0deg"
        topMenuButtons.style.top = "-40vh"
        content.style.filter = "none"
        invisible_screen.style.display = "none"
    }
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("menu-activator")) {
        MenuManage()
    }
})