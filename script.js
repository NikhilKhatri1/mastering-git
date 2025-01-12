let inputElement = document.querySelector('input');
let evenContainer = document.querySelector('.evenContainer');
let oddContainer = document.querySelector('.oddContainer');
let evenSpan = document.querySelector('.even');
let oddSpan = document.querySelector('.odd');
let button = document.querySelector('button');

//hide Container
evenContainer.style.display = 'none';
oddContainer.style.display = 'none';

button.addEventListener('click', () => {
    const inputValue = parseInt(inputElement.value);
    // if not positive value
    if (inputValue < 0 || isNaN(inputValue)) {
        alert('Please enter a positive number.');
        return;
    }

    // Reset lists
    let evenList = [];
    let oddList = [];

    if (inputValue % 2 === 0) {
        // Generate next three even numbers
        for (let i = 1; i <= 3; i++) {
            evenList.push(inputValue + i * 2);
        }
        evenSpan.textContent = evenList.join(', ');
        evenContainer.style.display = 'block';
        oddContainer.style.display = 'none';
    } else {
        // Generate next three odd numbers
        for (let i = 1; i <= 3; i++) {
            oddList.push(inputValue + i * 2);
        }
        oddSpan.textContent = oddList.join(', ');
        oddContainer.style.display = 'block';
        evenContainer.style.display = 'none';
    }
});
