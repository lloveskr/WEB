let rollCount = 0;

document.getElementById('rollButton').addEventListener('click', function() {
    // Генерация случайных чисел
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Обновление изображений кубиков
    document.getElementById('dice1').src = `img/dice${dice1}.png`;
    document.getElementById('dice2').src = `img/dice${dice2}.png`;

    // Обновление результата
    rollCount++;
    document.getElementById('sum').textContent = `Сумма: ${dice1 + dice2}`;
    document.getElementById('rollCount').textContent = `Количество бросков: ${rollCount}`;

    // Проверка на дубли
    if (dice1 === dice2) {
        document.getElementById('message').textContent = "Поздравляем! Вы выбросили дубли!";
    } else {
        document.getElementById('message').textContent = "";
    }
});
