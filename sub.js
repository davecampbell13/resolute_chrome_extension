if (!window.isTop) { // true  or  undefined
    // do something...
    var data = 'test';
    // Send message to top frame, for example:
    chrome.runtime.sendMessage({sendBack:true, data:data});
}