const form = document.querySelector("form");
const btnRemove = document.getElementById("btnRemove");
const p = document.getElementById("p");

document.addEventListener("load", init());

function init() {
    let savedName = localStorage.getItem("name");
    p.innerText = `${savedName}`;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = document.getElementById("input").value;
    localStorage.setItem("name", `${value}`);
    p.innerText = `${value}`;
});

btnRemove.addEventListener("click", function() {
    localStorage.removeItem("name");
    p.innerText = "";
});

//secondo esercizio
const h1 = document.querySelector("h1");
let i = sessionStorage.getItem("time") ? parseInt(sessionStorage.getItem("time")) : 1;

setInterval (function () {
    sessionStorage.setItem("time", `${i}`);
    h1.innerText = `${sessionStorage.getItem("time")}`;
    i++;
}, 1000);