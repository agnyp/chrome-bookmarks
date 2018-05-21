chrome.bookmarks.getTree(function(bookmarks){
  const section = document.getElementById("bookmarks")
  bookmarks[0].children.forEach((child) => {
    const p = document.createElement('p')
    p.innerHTML = child.title
    section.appendChild(p)
  })
})

// Tools
const bm = {}

bm.openBgTab = (link) => {
  chrome.tabs.create({url:link,active:false},function(tab){
    console.log("tab",tab)
  })
}
