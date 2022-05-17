const form = document.querySelector(".form");
const text = document.querySelector(".form");
const dateInput = form.querySelector(".dateInput");
const btnSubmit = form.querySelector(".btnSubmit");
const list = document.querySelector(".list");
const cell = document.querySelector(".cell");

dateInput.value = new Date().toLocaleDateString("en-CA");
btnSubmit.onclick = addItem;

function addItem() {
  const dateForm = Object.fromEntries(new FormData(form));
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerHTML = `<div class="cell">1</div>
  <div class="cell">${dateForm.text}</div>
  <div class="cell">
    <input type="checkbox" ${dateForm.flag ? "checked" : ""}/>
  </div>
  <div class="cell">${dateForm.number}</div>
  <div class="cell">${dateForm.date}</div>
  <div class="cell">
    <button>❌</button>
  </div>`;
  list.append(item);
}
