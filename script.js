const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
let ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn")

let  myLead = []

let leadFromLocalStroge = JSON.parse(localStorage.getItem("myLead"))

if(leadFromLocalStroge){
    myLead = leadFromLocalStroge
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLead = []
    renderLeads()
})


inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))

    renderLeads()
})

function renderLeads (){
    let listItems = "";
    for (let i = 0; i < myLead.length; i++) {
    //    listItems += "<li><a target='_blank' href=' " + myLead[i] + "'>" + myLead[i] + "</a></li>" 
       listItems += `<li>
                        <a target="_blank" href="${myLead[i]}">
                             ${myLead[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
}



