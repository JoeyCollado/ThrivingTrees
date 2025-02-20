document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.donation-button');
    const otherAmountInput = document.querySelector('.other-amount');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            otherAmountInput.value = ''; // Clear other amount input when a button is selected
        });
    });

    otherAmountInput.addEventListener('input', () => {
        buttons.forEach(button => button.classList.remove('selected'));
    });
});
