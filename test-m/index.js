const ipt = document.querySelector(".ipt");
const btnPut = document.querySelector(".btn-push");
const btnClean = document.querySelector(".btn-clean");
const list = document.querySelector(".list");
let arrVar = [];

btnPut.addEventListener("click", function () {
  arrVar.push(ipt.value);
  localStorage.setItem("exampleList", JSON.stringify(arrVar));
});
