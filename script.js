const inputElement = document.getElementById("input-todo");
const container = document.getElementById("cards-container");
const addButton = document.getElementById("add-button");

addButton.onclick = function () {
  //cardを作成して追加

  const card = createCard(inputElement.value);
  container.append(card);

  //入力欄を空に
  inputElement.value = "";
};

// 共通の処理：テキストからカードを作成
const createCard = function (text) {
  const card = document.createElement("div");
  card.className = "card";

  //テキストを表示する部分を作る
  const todo = document.createElement("div");
  todo.classname = "todo";
  todo.textContent = text;
  card.append(todo);

  //削除ボタン作成
  const deleteButton = document.createElement("div");
  deleteButton.className = "delete";

  //削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    card.remove();
  };

  card.append(deleteButton);

  return card;
};
