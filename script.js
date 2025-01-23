const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.classList.add('delete-btn');
        span.onclick = function() {
            li.remove();
            saveData();
        };

        li.appendChild(span);
        listContainer.appendChild(li);

        inputBox.value = '';
        saveData();
    }
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

loadData();