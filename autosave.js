function saveText(){
    let userText = document.getElementById('area').value;
    localStorage.setItem('storedValue', userText);
}

if(localStorage.storedValue) {
    document.getElementById('area').value = localStorage.storedValue;
    userText = localStorage.storedValue;
}

