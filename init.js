let wantEspresso = true; // <- default value of espresso

chrome.runtime.onInstalled.addListerner(() => {
    chrome.storage.sync.set({espresso: wantEspresso });
})