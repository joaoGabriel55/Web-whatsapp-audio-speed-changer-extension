
function changeSpeedBtn(speed) {
    const button = document.createElement("button")
    button.innerHTML = `x${speed}`
    button.classList.add("speed-audios-btn")
    button.title = "Change audio speed"
    return button
}

const intervalChats = setInterval(() => {
    const chats = document.querySelectorAll('._2wP_Y')
    if (chats) {
        let speed = 1
        chats.forEach(chat => {
            chat.addEventListener("click", () => {
                const audioComponents = document.querySelectorAll('.tFdoF')
                audioComponents.forEach((audio) => {
                    const intervalSearchPlayButtons = setInterval(() => {
                        const playButton = document.querySelector('._3zwKD')
                        if (playButton !== null) {
                            if (playButton.children[0].getAttribute('data-icon') === 'audio-play') {
                                const speedChanger = audio.querySelector('.speed-audios-btn')
                                if (speedChanger == null) {
                                    const button = changeSpeedBtn(speed)
                                    audio.appendChild(button)
                                    button.addEventListener("click", () => {
                                        if (speed === 3)
                                            speed = 1
                                        else
                                            speed++
                                        button.innerHTML = `x${speed}`
                                        const audios = audio.querySelectorAll("audio")
                                        audios.forEach((audio) => {
                                            audio.playbackRate = speed
                                        })
                                    })
                                    clearInterval(intervalSearchPlayButtons)
                                }
                            }
                        }
                    }, 1000)
                })
            })
        })
    }
}, 1000)

