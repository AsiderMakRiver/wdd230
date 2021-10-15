const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.onclick = function () {
  let myItem = input.value;
  while (myItem == "") {
    myItem = document.getElementById("favchap").placeholder = "You have to write something";
    list.appendChild();
  }
  /*for (; myItem == ""; ) {
    if (myItem != "") break;
  }*/
  /*for (let i = 0; myItem == ""; i++) {
    document.getElementById("favchap").placeholder = "You have to write something";
  }*/
  /*if (myItem == "") {
    document.getElementById("favchap").placeholder = "You have to write something";

  }*/

  input.value = "";
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "❌";
  list.appendChild(listItem);

  listBtn.onclick = function () {
    list.removeChild(listItem);
  };
  input.focus();
};
