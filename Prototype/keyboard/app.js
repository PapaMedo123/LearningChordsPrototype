const keys = document.querySelector('#keys');
const volPlus = document.querySelector('.fa-plus')
const volMinus = document.querySelector('.fa-minus');
const volume = document.querySelector('#volume')

volPlus.addEventListener('click', () => {
    if (volume.textContent != 2) {
        volume.textContent = parseInt(volume.textContent) + 1;
    }

})
volMinus.addEventListener('click', () => {
    if (volume.textContent != 0) {
        volume.textContent = parseInt(volume.textContent) - 1;
    }

})
const notBlack = [4, 7, 11, 14];
var j = 1;

for (let i = 0; i < 14; i++) {
    let whitekey = document.createElement('div');
    whitekey.classList.add('whiteKeys', 'key');
    whitekey.classList.add(`key${j}`)
    whitekey.style.left = (i * 7) + '%';
    keys.appendChild(whitekey);
    if([3,6,10,13].includes(i)) {
        j += 1
    }else {
        j += 2
    }
}

j = 2

for (let i = 1; i < 14; i++) {
    if (!notBlack.includes(i)) {
        let blackKey = document.createElement('div');
        blackKey.classList.add('blackKeys', 'key');
        blackKey.classList.add(`key${j}`)
        blackKey.style.left = (i * (7) - 1.75) + '%'
        keys.appendChild(blackKey);
        if([3,6,10].includes(i)) {
            j += 3;
        }else {
            j += 2
        }
    }
}


/*
for (let i = 1; i <= 14; i++) {
    let whitekey = document.createElement('div');
    whitekey.classList.add('whiteKeys', 'key');
    whitekey.classList.add(`key${j}`)
    whitekey.style.left = (i * 7) + '%';
    keys.appendChild(whitekey);
    if(i in [3,4,10,13]) {
        j += 1
    }else {
        j += 2
    }
}

j = 2

for (let i = 1; i < 14; i++) {
    if (!notBlack.includes(i)) {
        let blackKey = document.createElement('div');
        blackKey.classList.add('blackKeys', 'key');
        blackKey.classList.add(`key${j}`)
        blackKey.style.left = (i * (7) - 1.75) + '%'
        keys.appendChild(blackKey);
        if(i in [2,4,7]) {
            j += 2;
        }else {
            j += 3
        }
    }
}
*/


var key = Array.from(document.querySelectorAll('.key'))

key.forEach(k => {
    k.addEventListener('click', () => {

        let keySound = new sound(`sounds/${k.classList[2]}.mp3`, parseInt(volume.textContent))
        keySound.play();
    })
})

function play_whitenote(eventVal){
    Object.keys(eventVal).forEach(key => {

        if (keyPressed[key]) {
            document.querySelector(`.${eventVal[key]}`).style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector(`.${eventVal[key]}`).style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector(`.${eventVal[key]}`).style.background = 'white';
                document.querySelector(`.${eventVal[key]}`).style.boxShadow = ' none';
            }, 250)
            let keySound = new sound(`sounds/${eventVal[key]}.mp3`, parseInt(volume.textContent))
            keySound.play();
        }

    })
}

var keyPressed = {};
const keyPress = (event) => {
    let keyCode = event.keyCode;
    let keyDown = (event.type == 'keydown');

    keyPressed[keyCode] = keyDown;
    if (keyPressed[37] && !keyPressed[39]) {
        const eventVal = {
            '65': 'key1',
            '83': 'key3',
            '68': 'key5',
            '70': 'key7',
            '71': 'key8',
            '72': 'key10',
            '74': 'key12'
        }
        play_whitenote(eventVal)
    }
    if (keyPressed[39] && !keyPressed[37]) {
        const eventVal = {
            '65': 'key13',
            '83': 'key15',
            '68': 'key17',
            '70': 'key19',
            '71': 'key20',
            '72': 'key22',
            '74': 'key24'
        }
        play_whitenote(eventVal)
    }
    if (keyPressed[39] && keyPressed[37]) {
        const eventVal = {
            '65': 'key7',
            '83': 'key8',
            '68': 'key10',
            '70': 'key12',
            '71': 'key13',
            '72': 'key15',
            '74': 'key17',
            '75': 'key19',
            '76':  'key20',
            '59': 'key22'
        }
        play_whitenote(eventVal)
    }

    const eventVal = {
        '81': 'key2',
        '87': 'key4',
        '69': 'key6',
        '82': 'key9',
        '84': 'key11',
        '89': 'key14',
        '85': 'key16',
        '73': 'key18',
        '79': 'key21',
        '80': 'key23'
    }
    Object.keys(eventVal).forEach(key => {

        if (keyPressed[key]) {
            document.querySelector(`.${eventVal[key]}`).style.background = 'black';
            setTimeout(() => { document.querySelector(`.${eventVal[key]}`).style.background = 'rgb(71, 71, 71)'; }, 250)
            let keySound = new sound(`sounds/${eventVal[key]}.mp3`, parseInt(volume.textContent))
            keySound.play();
        }

    })




}
window.addEventListener('keydown', keyPress)

window.addEventListener('keyup', (event) => {

    keyPressed[event.keyCode] = false;
})

function sound(src, vol) {
    this.sound = document.createElement('audio')
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.volume = vol * 0.5;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
}