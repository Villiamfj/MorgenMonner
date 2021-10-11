let checkbox = document.getElementById("espresso");
checkbox.onclick = UpdateEspresso;

chrome.storage.sync.get(['espresso'], (result) =>{
    checkbox.checked = result.espresso;
});

function UpdateEspresso(){
    chrome.storage.sync.set({espresso: checkbox.checked});
}