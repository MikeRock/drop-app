export default function(url) {
const xhr = new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.overrideMimeType('text/xml');
xhr.onreadystatechange = (e) => {
  if(xhr.readyState == xhr.DONE && xhr.status ==200) 
    {
        let xml = xhr.responseXML
        let analogs = xml.querySelectorAll('ANALOG O V')
        let digitals = xml.querySelectorAll('DIGITAL O V')
        let integers = xml.querySelectorAll('INTEGER O V')
    }

} 
xhr.onprogress = (e) => {
let percentDone = (e.position / e.totalSize) * 100;    
}  
xml.send(null);  
}