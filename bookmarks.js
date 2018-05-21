'use strict';

chrome.runtime.onInstalled.addListener(function() {
  console.log("Plugin installed ... I suppose.");
  chrome.bookmarks.getTree(function(bookmarks){
    console.log(bookmarks)
    console.log(bookmarks[0])
  })
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


