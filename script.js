const play = document.querySelector('.play');
const regular = document.querySelectorAll('.white-key');
const sharps = document.querySelectorAll('.black-key');
const body = document.querySelector('.body');
const keys = document.querySelectorAll('.key');

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p'];


// const note = new Audio("tones/C-sharp.mp3");


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(regular[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
    console.log(whiteKeyIndex)
    console.log(key)
})

// regular.forEach(key => {
//     const K = key.dataset.key
//     // console.log(K)
//     var keyName = document.createElement('H1');
//     const content = document.createTextNode(WHITE_KEYS[K])
//     // keyName.className = "key_btn"
//     keyName.appendChild(content);

//     key.appendChild(keyName);
// })

regular.forEach((key, index) => {
    var keyName = document.createElement("H1");
    const content = document.createTextNode(WHITE_KEYS[index])
    console.log(content);
    keyName.className = 'key_btn'
    keyName.appendChild(content);
    key.appendChild(keyName);
})


sharps.forEach((key, index) => {
    var keyName = document.createElement('H1');
    const content = document.createTextNode(BLACK_KEYS[index])
    keyName.className = "key_btn"
    console.log(content)
    keyName.appendChild(content);
    key.appendChild(keyName);
})




function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    console.log(key.dataset.note)
    console.log(noteAudio)
    noteAudio.play()
    key.classList.add('active');
    setTimeout(() => {
        key.classList.remove('active');
    }, 500)
}


document.querySelector('.button').addEventListener('click', () => {
    note.play()
    console.log("clicked")
    body.classList.add('theme-light')
})



// const playMusic = (newUrl) => {
//     console.log('clicked')
//     let sound = new Audio(newUrl);
//     sound.play()
// }






