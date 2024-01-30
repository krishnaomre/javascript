const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener('click', ()=>{
    console.log('Grand Parent Clicked');
}, true)

parent.addEventListener('click', ()=>{
    console.log('Parent Clicked');
}, false)

child.addEventListener('click', ()=>{
    console.log('Child Clicked');
},false)
