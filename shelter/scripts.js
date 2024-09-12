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


const dialog = document.getElementById('myDialog')
const dialogOpener = document.querySelector('.openDialogBtn')
const dialogCloser = dialog.querySelector('.closeDialogBtn')

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget
  const isClickedOnBackDrop = target === dialog
  if (isClickedOnBackDrop) {
    close()
  }
}

function openModalAndLockScroll() {
  dialog.showModal()
  document.body.classList.add('scroll-lock')
}

function returnScroll() {
  document.body.classList.remove('scroll-lock')
}

function close() {
  dialog.close()
  returnScroll()
}

dialog.addEventListener('click', closeOnBackDropClick)
dialog.addEventListener('cancel', (event) => {
  returnScroll()
});
dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloser.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
})
