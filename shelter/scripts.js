// пока разбираюсь, пока не красиво,учусь

document.addEventListener("DOMContentLoaded", function()  {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})

let modal = document.getElementById('myModal');

let btn = document.getElementById('myBtn');

let closeBtn = document.getElementsByClassName("close")[0];

let popups = document.getElementById("popup");


btn.onclick = function () {
    modal.style.visibility = "visible";
            modal.style.display = "flex";
}

closeBtn.onclick = function () {
    modal.style.visibility = "hidden";
}

popups.onclick = function (event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
    }
}

