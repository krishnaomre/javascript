// const para = document.querySelector('p');
// console.log(para);
// const div = para.parentElement;
// console.log(div.nextElementSibling);
// console.log(div.nextElementSibling.previousElementSibling);

// ----------------- dynamically add or remove

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerText = 'Item 4';
ul.appendChild(li);
// ul.appendChild('sdfkjsdhfjks'); // error
// ul.append('Hello this is some string'); 
console.log(li);

const newList = document.createElement('ol');
newList.innerHTML = '<li>Item 1</li> <li>Item 2</li>';

// ul.before(newList);
ul.after(newList);
