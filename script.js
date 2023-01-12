const play = document.querySelector('.play');
const regular = document.querySelectorAll('.white-key');
const sharps = document.querySelectorAll('.black-key');
const body = document.querySelector('.body');
const keys = document.querySelectorAll('.key');

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u'];


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

regular.forEach(key => {
    const K = key.dataset.key
    // console.log(K)
    var keyName = document.createElement('H1');
    const content = document.createTextNode(WHITE_KEYS[K])
    // keyName.className = "key_btn"
    keyName.appendChild(content);

    key.appendChild(keyName);
})

sharps.forEach(key => {
    const B = key.dataset.key
    console.log(B)
    var keyName = document.createElement('H1');
    const blk_content = document.createTextNode(BLACK_KEYS[B])
    // keyName.className = "key_btn"
    console.log(blk_content)
    keyName.appendChild(blk_content);

    key.appendChild(keyName);
})





function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    console.log(key.dataset.note)
    console.log(noteAudio)
    noteAudio.play()
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






// regular.forEach((key, i) => {
//     console.log(key.dataset)
//     const number = i < 2 ? '0' + (i + 8) : (i + 8);
//     const newUrl = "./tones/key" + number + ".mp3"
//     key.addEventListener('click', () => playMusic(newUrl))
// })