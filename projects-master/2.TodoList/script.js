const inputFeild = document.querySelector("#input-box");
const Button = document.querySelector("#button1");
const ListContainer = document.querySelector(".list-container");

Button.onclick = () => {
    if (inputFeild === "") {
        alert("Please enter any valid input");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputFeild.value;
        ListContainer.appendChild(li);
        inputFeild.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        SaveData()
        
    }
    
}
ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');

    } else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
    }
})
const SaveData = () => {
    localStorage.setItem("data", ListContainer.innerHTML)
}
const showData = () => {
    ListContainer.innerHTML = localStorage.getItem("data");
}
showData();