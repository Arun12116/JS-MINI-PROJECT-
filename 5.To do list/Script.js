const add = document.getElementById('addToDo')
const list = document.getElementById('toDoContainer')
const input = document.getElementById('inputfield')

add.addEventListener('click', () => {

    let para = document.createElement('p')
    para.innerText = input.value;
    
    if(para.innerText !== ""){
    list.appendChild(para);
    }else{
    alert("Add Some Text")
    }
    
    para.addEventListener('click',() => {
        para.style.textDecoration = 'line-through';
    })
})
