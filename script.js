let userAccount = null;

function openPopup() {
  document.getElementById("popup").style.display = "block";
  userAccount = "@user_" + Math.floor(Math.random() * 10000);
  sessionStorage.setItem("userAccount", userAccount);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("userAccount");
});