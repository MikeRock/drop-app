import React, { Component } from 'react'

const styles = {
dropzone:{
width: '400px',
height: '400px',
border: '2px solid blue'    
}, 
button: {  
position: 'absolute',     
padding:'5px',
border: '2px solid blue',
color: 'blue',
top: '5px',
right: '5px'
},
image: {
width: '300px',
height: '300px',
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover'    
}

}

export default class DropZone extends Component {
    constructor(props) {
        super(props)
        this.handleDragOver = this.handleDragOver.bind(this)
        this.handleDrop = this.handleDrop.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {items: []}
    }
    handleDrop (e) {
        e.preventDefault()
        let data= e.dataTransfer.files;
        let images= [];
        let regxp = /^image\//
        let proms = [];
        if(data.length) {     
        Array.prototype.map.call(data,(file)=>{
            let promise = new Promise((resolve,reject) => {

             let reader = new FileReader();
            reader.onload = (e) => {
            if(reader.readyState == reader.DONE) {   
            console.log(`Loading ${file.name} complete`)    
            images.push(e.target.result) 
            resolve()    
            }
            }
            reader.onerror = (e) => {
            reject(e.target.error)    
            }
            if(regxp.test(file.type))
            reader.readAsDataURL(file)

            })
            proms.push(promise)
           
        })
        
    Promise.all(proms).then(response => {
       this.setState({items: images}) 
            }).catch((e) => console.log(e))
    }
    }
    handleDragOver (e) {
        e.preventDefault()
    }

    handleChange(e) {
    let files = e.target.files
    let props = []; 
   Array.prototype.map.call(files,(file)=>{
   props.push(file.name)
   })
    this.setState({items: props})
}
render() {
    return (
<div  style={styles.dropzone} onDrop ={this.handleDrop} onDragOver={this.handleDragOver}>
<div id='container'><span>Drop file or</span> 
<label style={styles.button}  htmlFor='button'>Select files</label>
<input onChange={this.handleChange} style={{visibility: 'hidden'}} multiple id='button' type='file' />    
</div>
{this.state.items.map((item,index) => {
 return <img style={styles.image} src={item} />   
})}
</div>   
)    
}
}


