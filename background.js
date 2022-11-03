function changeColor() { 
    let userColor = document.getElementById('colorID').value;
    localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
}

if(localStorage.storedValue) {
    document.getElementById('colorID').value = localStorage.storedValue;
    document.body.style.backgroundColor = localStorage.storedValue;
}
