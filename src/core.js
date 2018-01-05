import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DropZone from './components/dropZone'
let array = [1,2,3,4,5,6];
let string = 'abcdefg'
let channel = new MessageChannel();
let {hostname,host,port,protocol,href,origin,pathname} = window.location
window.caches.open('cache').then((cache)=>{return cache.add('./index.html')}).then((res)=>{console.log(res)})
//window.caches.open('cache').then((cache)=>cache.delete('./index.html').then((res)=>console.log(res)))
let config = window.caches.open('cache').then((cache)=>{return cache.match('index.html')}).then((res)=>console.log(res))
window.addEventListener('message',(e)=>{
    console.log(e.data);
})


window.addEventListener('popstate',(e)=>{console.log(e.state)})
window.addEventListener('hashchange',(e)=>{console.log(e.target)})
let db = window.indexedDB.open('database',1)
db.onupgradeneeded = e => {
let _db = e.target.result
     
}
class Item extends Component {
constructor(props){
super(props)
this.state = {prop: true}    
}
render() {return (
<DropZone />
 )}

}

ReactDOM.render(<Item />, document.getElementById('container'))

