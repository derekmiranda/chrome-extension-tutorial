if (!GB.getWatchThisInstead()) {
    GB.setWatchThisInstead(chrome.extension.getURL("instead.html"));
}
chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
    for (site in GB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tabId, {"url" : GB.getWatchThisInstead()}, function () {});
        }
    }
});
chrome.tabs.onCreated.addListener(function(tab) {
    for (site in GB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tab.id, {"url" : GB.getWatchThisInstead()}, function () {});
        }
    }
});