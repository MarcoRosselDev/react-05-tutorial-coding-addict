/*
    <h4>list to do</h4>
    <input type="text" class="ipt" />
    <button class="btn-push">click</button>
    <button class="btn-clean">clean</button>
    <div class="list"></div>
*/

const ipt = document.querySelector(".ipt");
const btnPut = document.querySelector(".btn-push");
const btnClean = document.querySelector(".btn-clean");
const list = document.querySelector(".list");

btnPut.addEventListener("click", function () {
  console.log(ipt.value);
});
