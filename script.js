const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const startPauseButton = document.querySelector('#start-pause');
const startPauseDisplay = document.querySelector('#start-pause span');
const startPauseIcon = document.querySelector('.app__card-primary-button-icon');
const buttons = document.querySelectorAll('.app__card-button');
const imgContext = document.querySelector('.app__image');
const textContext = document.querySelector('.app__title');
const musicFocusBox = document.querySelector('#alternar-musica');
const musicTheme = new Audio('/sons/luna-rise-part-one.mp3');
const musicPlay = new Audio('/sons/play.wav');
const musicPause = new Audio('/sons/pause.mp3');
const musicAlert = new Audio('/sons/beep.mp3');


let timeSeconds = 5;
let interval = null;

musicTheme.loop = true;

musicFocusBox.addEventListener('change', () => {
    if (musicTheme.paused) {
        musicTheme.play();
    } else {
        musicTheme.pause();
    }
});

focusButton.addEventListener('click', () => {
    changeContext('foco');
    focusButton.classList.add('active');
});

shortButton.addEventListener('click', () => {
    changeContext('descanso-curto');
    shortButton.classList.add('active');
});

longButton.addEventListener('click', () => {
    changeContext('descanso-longo');
    longButton.classList.add('active');
});

function changeContext(contexto) {
    buttons.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    imgContext.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            textContext.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `;
            break;
        case "descanso-curto":
            textContext.innerHTML = `
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
                `
            break;
        case "descanso-longo":
            textContext.innerHTML = `
               Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
                `
            break;

        default:
            break;
    }
};

const counting = () => {
    if (timeSeconds <= 0) {
        // musicAlert.play();
        alert('O tempo acabou.');
        zeroInterval();
        return;
    }

    timeSeconds -= 1;
    console.log('Tempo: ' + timeSeconds);
};

function startPause() {
    if (interval) {
        musicPause.play();
        zeroInterval();
        return;
    }
    interval = setInterval(counting, 1000);
    musicPlay.play();
    startPauseDisplay.textContent = 'Pausar';
    startPauseIcon.setAttribute('src', "/imagens/pause.png");
};

function zeroInterval() {
    clearInterval(interval);
    startPauseDisplay.textContent = 'Começar';
    startPauseIcon.setAttribute('src', "/imagens/play_arrow.png");
    interval = null;
};

startPauseButton.addEventListener('click', startPause);
