var menu=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var large_main_content=document.querySelector(".main-content");

menu.onclick= function(){

    sidebar.classList.toggle("short-sidebar");
    large_main_content.classList.toggle("large_main_content");
}