document.addEventListener("DOMContentLoaded", function(){
    const toDoList = document.getElementById("todo-list");
    const newToDoTextField = document.getElementById("new-todo-text-field");
    const newToDoForm = document.getElementById("new-todo-form");

    newToDoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        newToDoTextField.classList.remove("invalid");

        let newToDoText = newToDoTextField.value.trim();

        if(newToDoText.length === 0){
            newToDoTextField.classList.add("invalid");
            return;
        }

        const newToDoItem = document.createElement("li");

        function setViewMode() {
            newToDoItem.innerHTML = `
                    <div>
                        <span class = "todo-text"></span>
                        <button class = "edit-button" type = "button">Редактировать</button>
                        <button class = "delete-button" type = "button">Удалить</button>
                    </div>
            `;

            newToDoItem.querySelector(".todo-text").textContent = newToDoText;

            newToDoItem.querySelector(".delete-button").addEventListener("click", function(){
                    newToDoItem.remove();
            });

            newToDoItem.querySelector(".edit-button").addEventListener("click", function(){
                    newToDoItem.innerHTML = `
                          <div>
                               <input class = "edit-todo-text-field" type = "text"></span>
                               <button class = "save-button" type = "button">Сохранить</button>
                               <button class = "cancel-button" type = "button">Отмена</button>
                          </div>
                    `;

                    const editToDoTextField = newToDoItem.querySelector(".edit-todo-text-field");
                    editToDoTextField.value = newToDoText;

                    newToDoItem.querySelector(".cancel-button").addEventListener("click", function(){
                        setViewMode();
                    });

                    newToDoItem.querySelector(".save-button").addEventListener("click", function(){
                        const editedToDoText = editToDoTextField.value.trim();

                        if(editedToDoText.length === 0){
                            newToDoTextField.classList.add("invalid");
                            return;
                        }

                        newToDoTextField.classList.remove("invalid");

                        newToDoText = editedToDoText;

                        setViewMode();
                    });
            });
        }

        setViewMode();
        toDoList.appendChild(newToDoItem);
        newToDoTextField.value = "";
    });
});