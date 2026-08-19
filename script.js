let buttonEl = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("unordered-el")
let button2El=document.getElementById("input-btn2")
let tabBtn=document.getElementById("tab-btn")
let myLeads = []

const leadFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadFromStorage) {
    myLeads = leadFromStorage
    renderlead(myLeads)
}

buttonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderlead(myLeads)
})

tabBtn.addEventListener("click",function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderlead(myLeads)
            
})

}
)

function renderlead(leads) {
    let listItem = ""

    for (let i = 0; i < leads.length; i++) {
        listItem += `<li>
            <a href="${leads[i]}" target="_blank">${leads[i]}</a>
        </li>`
    }

    ulEl.innerHTML = listItem
}
button2El.addEventListener("dblclick", function() {
    ulEl.innerHTML=""
    localStorage.clear()
    myLeads=[]
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
   
})




