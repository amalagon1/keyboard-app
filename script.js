const play = document.querySelector('.play');
const regular = document.querySelectorAll('.white-key');
const sharps = document.querySelectorAll('.black-key');
const body = document.querySelector('.body');
const keys = document.querySelectorAll('.key');


const note = new Audio("tones/C-sharp.mp3");


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
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