// Задача 1: Кнопка с подсчётом кликов
document.getElementById('clickButton').addEventListener('click', function() {
    let clicks = parseInt(document.getElementById("clicksCount").innerText);
    document.getElementById('clicksCount').innerText = ++clicks;
});

// Задача 2: Валидация формы ввода Email
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const emailInput = document.getElementById('emailInput');
    const validationMessage = document.getElementById("validationMessage");

    if (!validateEmail(emailInput.value)) {
        validationMessage.innerHTML = 'Некорректный Email';
    } else {
        validationMessage.innerHTML = '';
    }
});

// Функция проверки корректности Email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// Задача 3: Таймер с количеством прошедших секунд
let secondsElapsed = 0;
const timerInterval = setInterval(function() {
    document.getElementById("timerSeconds").innerHTML = ++secondsElapsed;
}, 1000); // Обновляем каждые 1000 мс (1 секунда)