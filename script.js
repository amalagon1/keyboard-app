const play = document.querySelector('.play');
const regular = document.querySelectorAll('.white-key');
const sharps = document.querySelectorAll('.black-key');
const body = document.querySelector('.body');




document.querySelector('.button').addEventListener('click', () => {
    console.log("clicked")
    body.classList.add('theme-light')
})



const playMusic = (newUrl) => {
    console.log('clicked')
    let sound = new Audio(newUrl);
    sound.play()
}



// play.addEventListener('click', music)


regular.forEach((key, i) => {
    console.log(key.dataset)
    const number = i < 2 ? '0' + (i + 8) : (i + 8);
    const newUrl = "./tones/key" + number + ".mp3"
    key.addEventListener('click', () => playMusic(newUrl))
})