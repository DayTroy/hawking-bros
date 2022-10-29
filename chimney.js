const consultationFormBtn = document.querySelector('.consultation-form__btn'); 
const nameForm = document.forms["consultationForm"]["formName"].value;
const phoneForm = document.forms["consultationForm"]["formPhone"].value;
consultationFormBtn.addEventListener('click', () => {
    if(!(nameForm == "" || nameForm == null) && !(phoneForm == "" || phoneForm == null)){
        alert("Fill out the fields");
    }
    return false;
    //Требуется доработать.
})

