const ipt = document.querySelector(".ipt");
const btnPut = document.querySelector(".btn-push");
const btnClean = document.querySelector(".btn-clean");
const list = document.querySelector(".list");
const areInLocalStorage = JSON.parse(localStorage.getItem("exampleList"));
let arrVar = [];

if (areInLocalStorage) {
  arrVar = areInLocalStorage;
  printDom(arrVar);
}

btnPut.addEventListener("click", function () {
  arrVar.push(ipt.value);
  localStorage.setItem("exampleList", JSON.stringify(arrVar));
  ipt.value = "";
  printDom(arrVar);
});

function printDom(arr) {
  let printInner = "";
  for (let i = 0; i < arr.length; i++) {
    printInner += `<ul>${arr[i]}</ul>`;
  }
  list.innerHTML = printInner;
}

btnClean.addEventListener("dblclick", function () {
  localStorage.clear();
  arrVar = [];
  printDom(arrVar);
});
