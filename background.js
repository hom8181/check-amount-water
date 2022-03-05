chrome.runtime.onMessage.addListener(function(message, callback) {
    if (message.data == "visit_blog") {
       chrome.tabs.executeScript({
    code:'document.getElementsByClassName("btn btn_add_nb _addBuddyPop _rosRestrictAll _returnFalse")[0].click();'
}, function(result) { // After executing 'code' (callback)
    
});
    }
});