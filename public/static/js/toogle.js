const btn_toogle = document.getElementById("nav-toogle");
const menu_toogle = document.getElementById("menu-toogle");
btn_toogle.addEventListener("click", function(event)
{
    if(menu_toogle.classList.contains("hidden"))
    {
        menu_toogle.classList.remove("hidden");
    }else
    {
        menu_toogle.classList.add("hidden");
    }
}, false);