const reactElement={
    //a link tag example
    type:'a',
    props: {
        href:"https://google.com",
        target:'_blank'
    },
    children: 'Click me to visit google'
}

//props are objects.ie. key-value pairs
const mainConatiner=document.querySelector('#root')

//we now create a fxn that renders reactElmnts to the html div
