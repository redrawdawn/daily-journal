import { EntryListComponent } from "./JournalEntryList.js";

EntryListComponent()

const myFunc = function(eventInfo) {
    debugger; 
    alert(eventInfo.currentTarget.innerText);
};

document.querySelector("#save").addEventListener("click", myFunc);