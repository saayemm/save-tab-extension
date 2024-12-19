const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
let ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

let  myLead = []

let leadFromLocalStroge = JSON.parse(localStorage.getItem("myLead"))

if(leadFromLocalStroge){
    myLead = leadFromLocalStroge
    render(myLead)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    })

    
})

function render (lead){
    let listItems = "";
    for (let i = 0; i < lead.length; i++) {
       listItems += `<li>
                        <a target="_blank" href="${lead[i]}">
                             ${lead[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLead = []
    render(myLead)
})


inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
})


