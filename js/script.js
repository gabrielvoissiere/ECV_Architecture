var burger = document.getElementById("burger");

burger.addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("slide")
    document.getElementById("l1").classList.toggle("croix-l1")
    document.getElementById("l2").classList.toggle("croix-l2")
    document.getElementById("l3").classList.toggle("croix-l3")
})

document.getElementById("body").style.cursor = 'url("../assets/cursor.png")'