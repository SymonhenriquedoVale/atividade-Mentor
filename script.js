const campos = document.querySelectorAll(".required");
const labels = document.querySelectorAll(".span-required");
const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function setError(index) {
  campos[index].style.border = "2px solid red";
  labels[index].style.display = "block";
}

function setOk(index) {
  campos[index].style.border = "none";
  labels[index].style.display = "none";
}

let emailValidado = false;

function emailValidade(index) {
  if (!emailregex.test(campos[0].value)) {
    setError(0);
    emailValidado = false;
  } else {
    setOk(0);
    emailValidado = true;
  }
}

function logaR(e) {
  if (emailValidado === true) {
    location.href = "fim.html";
    campos[0].value = "";
  }
}
