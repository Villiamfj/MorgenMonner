let espressoCheckbox = document.getElementById("espresso");
let secretMenuCheckbox = document.getElementById("secretMenu");

espressoCheckbox.onclick = UpdateEspresso;
secretMenuCheckbox.onclick = UpdateSecretMenu;

chrome.storage.sync.get(['espresso'], (result) =>{
    espressoCheckbox.checked = result.espresso;
});

chrome.storage.sync.get(['secretMenu'], (result) => {
    secretMenuCheckbox.checked = result.secretMenu;
})

function UpdateEspresso(){
    chrome.storage.sync.set({espresso: espressoCheckbox.checked});
}

function UpdateSecretMenu(){
    chrome.storage.sync.set({secretMenu: secretMenuCheckbox.checked});
}
