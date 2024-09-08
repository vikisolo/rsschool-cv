
const popupOverlay = document.getElementById("popup-one");
const popup = document.getElementById("popup");
 
function showPopup() {
  popupOverlay.style.display = "block";
}
 
function hidePopup() {
  popupOverlay.style.display = "none";
}
 
popupOverlay.addEventListener("click", hidePopup);
popup.addEventListener('click', (event) => {
  event.stopPropagation()
  close()
})


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
