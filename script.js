const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const buttons = document.querySelectorAll('.app__card-button');
const imgContext = document.querySelector('.app__image');
const textContext = document.querySelector('.app__title');
const musicFocusBox = document.querySelector('#alternar-musica');
const music = new Audio('/sons/luna-rise-part-one.mp3');

music.loop = true;

musicFocusBox.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
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

