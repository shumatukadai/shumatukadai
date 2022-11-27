const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  //cardを作成して追加
  const card = createCard(inputElement.value)
  container.append(card)

  //入力欄を空に
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.classname = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタン作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    card.remove()
  }

  card.append(deleteButton)

  return card
}


// ここから先時計機能
const hour = document.querySelector(".hour.hand");
const minute = document.querySelector(".minute.hand");
const second = document.querySelector(".second.hand");

setInterval(() => {
  const date = new Date();
  const s = (360 / 60) * date.getSeconds();
  const m = (360 / 60) *  date.getMinutes() + (s / 60);
  const h = (360 / 24) * date.getHours() + (m / 24);

  second.style.transform = 'rotate(${s}deg)';
  minute.style.transform = 'rotate(${m}deg';
  second.style.transform = 'rotate(${h}deg';
}, 1000);