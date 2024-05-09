// const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


createBtn.addEventListener('click', ()=>{
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = 'input-box';
    inputbox.setAttribute('contenteditable', 'true');
    img.src = 'image/delete.png';
    notesContainer.appendChild(inputbox).appendChild(img);
})