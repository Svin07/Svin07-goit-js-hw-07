const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', getInput);

function getInput() {
    outputValue.textContent = inputValue.value === ''?'Anonymous':inputValue.value;
    return
}

// console.dir(inputValue);