const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
let ulEl = document.querySelector("#ul-el");

let  myLead = []
inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads (){
    let listItems = "";
    for (let i = 0; i < myLead.length; i++) {
       listItems += "<li>" + myLead[i] + "</li>" 
    }
    ulEl.innerHTML = listItems;
}



