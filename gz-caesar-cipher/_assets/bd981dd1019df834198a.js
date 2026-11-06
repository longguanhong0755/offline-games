// Current Year
let year=new Date().getFullYear()
document.body.querySelector(".footer").innerText=`Copyright ©️ ${year}`

//Audio
let select_audio=new Audio("/_assets/f93b1b0f075cb8aaa94a.mp3")
const audio_play=()=>{
    select_audio.play()
}
document.body.querySelector(".options").addEventListener('mouseover',audio_play)

