document.addEventListener('DOMContentLoaded', () => {


  const numberBtn = document.querySelectorAll('.numberBtn')
  const buttonStart = document.querySelector('.buttonStart')
  const gameContent = document.querySelector('.gameContent')
  const startWindow = document.querySelector('.startWindow')
  const randomNumberText = document.querySelector('.randomNumberText')
  const aboutRandomNumber = document.querySelector('.aboutRandomNumber')
  let gameCounter = 3
  let randomNumber = Math.floor(Math.random() * 10) + 1
  let gameScore = ''
  

  buttonStart.addEventListener('click', () => {
    buttonStart.style.background = 'brown'
    startWindow.style.transition = '3s linear'
    startWindow.style.opacity = '.1'
    setTimeout(() => {
      startWindow.style.display = 'none'
      startGame()
    }, 2000)
  })
  
  
  numberBtn.forEach((key) => {
    key.addEventListener('click', (event) => {
      let buttonNumber = event.target.textContent
      randomNumberText.innerHTML = `<span>Numerosi on: </span>${buttonNumber}`

      if (gameCounter >= 0) {

        switch (buttonNumber == randomNumber) {
          case (buttonNumber < randomNumber):
            aboutRandomNumber.innerHTML = 'Numeroni on pienempi'
            break
          case (buttonNumber > randomNumber):
            aboutRandomNumber.innerHTML = 'Numeroni on suurempi'
            break
          case (buttonNumber == randomNumber):
            aboutRandomNumber.innerHTML = 'Voitit'
                gameScoreIncrement()
                setTimeout(() => {
                  restartGame()
                }, 1500)
                break
            }
        }
        gameCounter--
      
      if (gameCounter == 0 && buttonNumber != randomNumber) {
        aboutRandomNumber.innerHTML = `Hävisit, numeroni oli: <strong>${randomNumber}</strong>`
        gameScoreDecrement()
        restartGame()
      }
    })
  })

  
  startGame = () => {
    gameContent.style.display = 'block'
  }

  restartGame = () => {
    const restartGameWindow = document.querySelector('.restartGameWindow')
    restartGameWindow.style.display = 'block'
    const restartBtn = document.querySelector('.restartBtn')
    restartBtn.addEventListener('click', () => {
      if (restartBtn) {
        aboutRandomNumber.innerHTML = ''
        randomNumberText.innerHTML = ''
        restartGameWindow.style.display = 'none'
        gameCounter = 3
        randomNumber = Math.floor(Math.random() * 10) + 1
      }
    })
  }


  gameScoreIncrement = () => {
    gameScore++
    if (gameScore == -1) {
      gameScore--
    }
    let scoreText = document.querySelector('.scoreText')
    scoreText.innerHTML = `Voitetut pelisi: ${gameScore}`
  }

  gameScoreDecrement = () => {
    gameScore--
    if (gameScore == -1) {
      gameScore++
    }
    let scoreText = document.querySelector('.scoreText')
    scoreText.innerHTML = `Voitetut pelisi: ${gameScore}`
  }





  

})