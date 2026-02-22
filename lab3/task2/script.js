const form = document.querySelector("form");
const input = document.querySelector(".tasker");
const list = document.getElementById("toDoList");


form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const taskText = input.value.trim();


    // Создание элементов
    const li = document.createElement("li");
    const leftSide = document.createElement("div");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");


    // Настройка
    checkbox.type = "checkbox";
    span.textContent = taskText;
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "delete-btn"
    leftSide.style.display = "flex";
    leftSide.style.alignItems = "center";
    leftSide.style.gap = "10px";


    // Событие: выполнено
    checkbox.addEventListener("click", function () {
        let input = prompt("Do you wanna delete?");
        if (input === "yes"){
            list.removeChild(li);
        }
        else{
            return;
        }
    });

    // Событие: удалить
    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    // Сборка
    leftSide.appendChild(checkbox);
    leftSide.appendChild(span);
    li.appendChild(leftSide);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});
