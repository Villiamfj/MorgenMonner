chrome.runtime.onInstalled.addListerner(() => {
    chrome.storage.sync.set({espresso: true });
})

chrome.runtime.onInstalled.addListerner(() => {
    chrome.storage.sync.set({secretMenu: true});
})