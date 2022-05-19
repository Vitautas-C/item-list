const form = document.querySelector(".form");
const dateInput = form.querySelector(".date-input");
const submitBtn = form.querySelector(".submit-btn");
const list = document.querySelector(".list");
const delBtn = document.querySelector(".del-btn");

dateInput.value = new Date().toLocaleDateString("en-CA");
submitBtn.onclick = addItem;
list.onclick = (event) => {
  if (event.target.classList.contains("del-btn")) {
    const item = event.target.closest("[data-id]");
    delItem(item.dataset.id);
  }
  if (event.target.type == "checkbox") {
    const item = event.target.closest("[data-id]");
    completedItem(item.dataset.id, event.target.checked);
  }
};

function genId() {
  return new Date().getTime();
}

function addItem() {
  const dateForm = Object.fromEntries(new FormData(form));
  const item = document.createElement("li");
  item.classList.add("item");
  item.dataset.id = genId();
  item.innerHTML = `
    <div class="cell">${counter()}</div>
    <div class="cell">${dateForm.text}</div>
    <div class="cell">
      <input type="checkbox" ${dateForm.flag ? "checked" : ""}/>
    </div>
    <div class="cell">${dateForm.number}</div>
    <div class="cell">${dateForm.date}</div>
    <div class="cell">
      <button class="del-btn">❌</button>
    </div>
  `;
  list.append(item);
}

function delItem(id) {
  const targetItem = list.querySelector(`[data-id="${id}"]`);
  targetItem.remove();
}

function counter() {}

function completedItem(id, checked) {
  const targetItem = list.querySelector(`[data-id="${id}"]`);
  checked
    ? targetItem.classList.add("completed")
    : targetItem.classList.remove("completed");
}
