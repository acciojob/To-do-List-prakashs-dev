//your code here
      const input = document.getElementById("newTodoInput");
      const btnClick = document.getElementById("addTodoBtn");
      const list = document.getElementById("todoList");
      btnClick.addEventListener("click", function () {
        if (input.value) {
          const myList = document.createElement("li");
          myList.innerText = input.value;
          list.appendChild(myList);
          input.value = "";
        }
      });
