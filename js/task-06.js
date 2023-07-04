const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener('blur', validateInput);
const inputLength = Number(inputRef.dataset.length);

function validateInput() {
   if(inputRef.value.length === inputLength){
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};