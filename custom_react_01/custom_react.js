function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.append(reactElement.children)
    // let props_arr = reactElement.props.getAttributeNames()
    let props_arr = Object.keys(reactElement.props)
    props_arr.forEach((property)=>{
        domElement.setAttribute(property, reactElement.props[property])
    })
    
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank',
        style:'color:yellow;'
    }, 
    children: 'Click me to visit google'
};

let mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)