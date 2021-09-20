// Guess a number between 1 and 5, and see if it is correct
// User will be provided with 5 tries

let triesLeft = 5;
let statusGame = '';

function getRandomNumberBetweenTwoValuesEndExcluded(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function submitGuess(field, error, button) {
    error.innerHTML = '';
    error.style.color = 'red';
    if (statusGame === 'Lost' || statusGame === 'Won') {
        button.innerHTML = 'Submit';
        button.style.backgroundColor = '#ff7f50';
        triesLeft = 5;
        document.getElementById('triesDisplay').innerHTML = 5;
        statusGame = '';
    } else {
        if (field.value.trim() == '') {
            error.innerHTML = 'Invalid Input';
        } else if (isNaN(Number(field.value.trim()))) {
            error.innerHTML = 'Input is not a number';
        } else if (Number(field.value.trim()) > 5 || Number(field.value.trim()) < 1) {
            error.innerHTML = 'Number should be between 1 and 5';
        } else {
            let randomNum = getRandomNumberBetweenTwoValuesEndExcluded(6, 1);
            let triesDisplay = document.getElementById('triesDisplay');
            if (randomNum === Number(field.value.trim())) {
                error.innerHTML = 'You Won';
                error.style.color = 'lightgreen';
                statusGame = 'Won';
                field.value = '';
                button.innerHTML = 'Restart';
                button.style.backgroundColor = '#ffe942';
            } else {
                if ((triesLeft - 1) < 1) {
                    error.innerHTML = 'You Lost';
                    statusGame = 'Lost';
                    field.value = '';
                    button.innerHTML = 'Restart';
                    button.style.backgroundColor = '#ffe942';
                } else {
                    error.innerHTML = 'Try Again';
                }
                triesDisplay.innerHTML = triesLeft - 1;
                triesLeft -= 1;
            }
        }
    } 
}