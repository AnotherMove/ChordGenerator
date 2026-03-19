const chords = ['Cm', 'G#', 'G', 'Fm', 'A#', 'D', 'Gdim'];

// Знаходимо елементи
const button = document.querySelector('.Golovniy');
const output = document.getElementById('chords-output');

// Функція рандомного акорду
function getRandomChord() {
    return chords[Math.floor(Math.random() * chords.length)];
}

// Обробник кнопки
button.addEventListener('click', function() {
    // Генеруємо 4 акорди
    const progression = [
        getRandomChord(),
        getRandomChord(),
        getRandomChord(),
        getRandomChord()
    ];
    
    // Виводимо стрілочками
    output.innerHTML = progression.join(' → ');
    
    // Анімація появи
    output.style.opacity = '0';
    output.style.transform = 'scale(0.8)';
    setTimeout(() => {
        output.style.transition = 'all 0.5s';
        output.style.opacity = '1';
        output.style.transform = 'scale(1)';
    }, 10);
});