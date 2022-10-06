let count = 0;

let buttonAdd = document.getElementById("add");
let buttonReset = document.getElementById("reset");

let list = document.getElementById("unsortedList");

buttonAdd.addEventListener("click", () => {
    let listElem = document.createElement("li");

    listElem.innerText = count;
    list.appendChild(listElem);

    if(count % 2 === 0) {
        listElem.classList.add("green");
    } else {
        listElem.classList.add("red");
    }

    count++;
})

buttonReset.addEventListener("click", ()=> {
    list.innerHTML = "";
    count = 0;
})