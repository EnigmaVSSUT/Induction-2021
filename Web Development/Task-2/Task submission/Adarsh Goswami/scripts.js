var button = document.querySelector('input[name=theme]');
button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Switch to Dark Theme') {
        button.value = 'Switch to Light Theme';
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        button.value = 'Switch to Dark Theme'
        document.documentElement.setAttribute('data-theme', 'light')
    }
}