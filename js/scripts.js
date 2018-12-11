var content;
    table = document.getElementById("table");
function inputCheck() {
    var finalEvent = false,
        event = document.getElementById("event").value,
        date = document.getElementById("date").value;
    if (event === "") {
        alert("Вы не указали задачу");
        finalEvent = true;
    }
    else if (date === "") {
        alert("Вы не указали дату");
        finalEvent = true;
    }
    return finalEvent;
}
function AddTaskTable() {
    if (!inputCheck()) {
        var lineCreation = table.insertRow(table.length),
            insertCheckBox = lineCreation.insertCell(0),
            insertDate = lineCreation.insertCell(1),
            insertEvent = lineCreation.insertCell(2),
            insertDell = lineCreation.insertCell(3),
            date = document.getElementById("date").value,
            event = document.getElementById("event").value;
            insertCheckBox.appendChild(CheckBoxCreate("id"));
            insertDate.innerHTML = date;
            insertEvent.innerHTML = event;
            insertDell.appendChild(DeleteImage());
    }
}
function CheckBoxCreate() {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    return checkbox;
}
function DeleteImage() {
    var img = document.createElement("input");
    img.type = "image";
    img.src = "img/delete.png";
    img.addEventListener("click", function(){
        img.parentNode.parentNode.remove();
       });
    return img;
}
function ClearTaskTable() {
    var rowCount = table.rows.length;
    for (var i=rowCount-1; i>=0; i--) {
        table.deleteRow(i);
    }
}
function deleteLine() {
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[0].firstChild.checked) {
            table.deleteRow(i);
            i--;
        }
    }
}
