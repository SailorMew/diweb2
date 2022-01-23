var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
btn.addEventListener("click", function () { ChangeTheme(); });
function ChangeTheme()
{
    let Theme1 = "style/Style.css";
    let Theme2 = "style/Style2.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == Theme1)
    {
   	 currTheme = Theme2;
   	 theme = "2";
    }
    else
    {    
   	 currTheme = Theme1;
   	 theme = "1";
    }
    link.setAttribute("href", currTheme);
}