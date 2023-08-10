let headingel = document.getElementById("heading");
let userinputel = document.getElementById("themeUserInput");
let bgcontainerel = document.getElementById("bgContainer");


function themechanger(event) {
    if (event.key === "Enter") {
        let userinputval = userinputel.value;
        if (userinputval === "Dark") {
            bgcontainerel.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingel.style.color = "white";
        } else if (userinputval === "Light") {
            bgcontainerel.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingel.style.color = "#O14d4O";
        } else {
            alert("enter the valid theme");
        }
    }
}
userinputel.addEventListener("keyup", themechanger);