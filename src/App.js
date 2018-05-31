import React, { Component } from 'react';
import { Folder } from './components/folder/folder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      chrome.bookmarks.getTree(function(bookmarks){
        const bmCategories = bookmarks[0]

          const section = document.getElementById("bookmarks")

          bmCategories.children.forEach((category) => {
            const h2 = document.createElement('h2')
              h2.innerHTML = category.title
              section.appendChild(h2)
              bm.appendChild(h2, category)
          })
      })

    // Tools
    const bm = {}

    bm.openBgTab = (link) => {
      chrome.tabs.create({url:link,active:false},function(tab){
        console.log("tab",tab)
      })
    }
    bm.appendChild = (elem, child) => {
      if(child.children == null){
        const a = document.createElement('a')
          a.innerHTML = child.title
          a.href = child.url
          elem.appendChild(a)
          return
      }else{
        child.children.forEach((child) => {
          const h3 = document.createElement('h3')
            h3.innerHTML = child.title
            h3.href = child.url
            elem.appendChild(h3)
            return bm.appendChild(h3, child)
        })
      }
    }
  }
  render() {
    return (
      <div>
        <Folder title={<b>Hallo</b>}>
          kasdjfghasdkjfhgaskdjhfkjasdhfkjasdhfkjhsakjfhaskjfhsdkjhfskjdhfkjasdhfkjsadhfk
        </Folder>
        <h1>Bookmarks</h1>
        <section id="bookmarks"></section>
        <script src="popup.js"></script>
      </div>
    );
  }
}

export default App;
