const input = document.querySelector('#validation-input');

input.addEventListener('blur', function (event) {
    const inputValue = event.currentTarget.value;
    const dataSet = input.getAttribute('data-length');
  
    if (inputValue.length === Number(dataSet)) {
        input.classList.add('valid');
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid')
        }
    } else if (inputValue.length !== Number(dataSet)) {
        input.classList.add('invalid');
        if (input.classList.contains('valid')) {
            input.classList.remove('valid')
        }
    }
});

