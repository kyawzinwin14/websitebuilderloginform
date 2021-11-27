const menu = document.querySelector(".menu");
const menuicon = document.querySelector(".menu .fas");
const navmobile = document.querySelector(".mobile-menu");
const closebtn = document.querySelector(".close");
const menus = document.querySelectorAll(".menus");
const menusicon = document.querySelectorAll(".menus .fas");

menu.addEventListener("click", () => {
    if (menuicon.className === "fas fa-chevron-down") {
        navmobile.classList.add("mobile-view");
        menuicon.className = "fas fa-chevron-up";
    } else {
        navmobile.classList.remove("mobile-view");
        menuicon.className = "fas fa-chevron-down";
        menus.forEach(menu => menu.classList.remove("drop-down"));
    }
});

closebtn.addEventListener("click", () => {
    navmobile.classList.remove("mobile-view");
    menuicon.className = "fas fa-chevron-down";
    menus.forEach(menu => menu.classList.remove("drop-down"));
});

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("drop-down");
        console.log(menu.childNodes);
    });
});

const labels = document.querySelectorAll(".label");

labels.forEach(label => {
    label.addEventListener("click", () => {
        label.classList.toggle("mobile-view");
    });
});