document.addEventListener('DOMContentLoaded', () => {


  const numberBtn = document.querySelectorAll('.numberBtn')
  const buttonStart = document.querySelector('.buttonStart')
  const gameContent = document.querySelector('.gameContent')
  const startWindow = document.querySelector('.startWindow')
  const closeGame = document.querySelector('.closeGame')
  const randomNumberText = document.querySelector('.randomNumberText')
  const aboutRandomNumber = document.querySelector('.aboutRandomNumber')
  const scoreAfterGame = document.querySelector('.scoreAfterGame')
  let gameCounter = 3
  let randomNumber = Math.floor(Math.random() * 10) + 1
  let gameScore = ''
  let totalScoreWin = 0
  let totalScoreLose = 0
  

  /////////////////////////ALOITAME PELI////////////////////////////////////////

  buttonStart.addEventListener('click', () => {
    buttonStart.style.background = 'brown'
    startWindow.style.transition = '3s linear'
    startWindow.style.opacity = '.1'
    setTimeout(() => {
      startWindow.style.display = 'none'
      scoreAfterGame.style.display = 'none'
      startGame()
    }, 2000)
  })
  

  ////////////////////////////1-10 PAINONAPPIA OBJECTISTÄ ESTIMME JOKA NAPPI MIKÄ PAINOTTU//////////////////////////////
  
  numberBtn.forEach((key) => {
    key.addEventListener('click', (event) => {
      let buttonNumber = event.target.textContent
      randomNumberText.innerHTML = `<span>Numerosi on: </span>${buttonNumber}`

/////////////////////////////PELI KESTUVUS 3 KERTA//////////////////////////////////////////////////////////////////

      if (gameCounter >= 0) {

///////////////////////////////PELIN LOGIIKA KUN PELISSÄ VALITTU VÄÄRÄ NUMERO TAI SAMAN NUMERO//////////////////////////

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
                totalWinScore()
                notActiveNumberButtons()
                setTimeout(() => {
                  restartGame()
                }, 1500)
                break
            }
        }
        gameCounter--

////////////////////////////////KUN PELI LÄPI JA NUMEROT EI LÖIDETTU////////////////////////////////////////////////////
      
      if (gameCounter == 0 && buttonNumber != randomNumber) {
        aboutRandomNumber.innerHTML = `Hävisit, numeroni oli: <strong>${randomNumber}</strong>`
        gameScoreDecrement()
        totalLoseScore()
        setTimeout(() => {
          restartGame()
        }, 1500)
        notActiveNumberButtons()
      }
    })
  })

///////////////////////////////PELIN ALOISTUS FUNCTION///////////////////////////////////////////////
  
  startGame = () => {
    gameContent.style.display = 'block'
    activeNumberButtons()
  }

/////////////////////////////PELIN KÄYNNISTYS UUDELLEEN JOS PELI LOPPUU/////////////////////////////////////////////////

  restartGame = () => {
    const restartGameWindow = document.querySelector('.restartGameWindow')
    restartGameWindow.style.display = 'block'
    const restartBtn = document.querySelector('.restartBtn')
    restartBtn.addEventListener('click', () => {
      if (restartBtn) {
        activeNumberButtons()
        aboutRandomNumber.innerHTML = ''
        randomNumberText.innerHTML = ''
        restartGameWindow.style.display = 'none'
        gameCounter = 3
        randomNumber = Math.floor(Math.random() * 10) + 1
      }
    })
  }


////////////////////////PELIN ARVIO JOS VOITETTU, SITTEN +//////////////////////////////////////////////////

  gameScoreIncrement = () => {
    gameScore++
    if (gameScore == -1) {
      gameScore--
    }
    let scoreText = document.querySelector('.scoreText')
    scoreText.innerHTML = `Voitetut pelisi: ${gameScore}`
  }


////////////////////////PELIN ARVIO JOS HÄVITTY, SITTEN -//////////////////////////////////////////////////

  gameScoreDecrement = () => {
    gameScore--
    if (gameScore == -1) {
      gameScore++
    }
    let scoreText = document.querySelector('.scoreText')
    scoreText.innerHTML = `Voitetut pelisi: ${gameScore}`
  }

//////////////////////////////NUMBER BUTTONS ACTIVE AND COLOR////////////////////////////////////////

  notActiveNumberButtons = () => {
    numberBtn.forEach((key) => {
      key.classList.remove('numberBtn')
      key.classList.add('numberBtnNotActive')
    })
  }

  activeNumberButtons = () => {
    numberBtn.forEach((key) => {
      key.classList.remove('numberBtnNotActive')
      key.classList.add('numberBtn')
    })
  }


////////////////////////TOTAL GAME SCORE////////////////////////////////////////////

  totalWinScore = () => {
    totalScoreWin++
  }

  totalLoseScore = () => {
    totalScoreLose++
  }

////////////////////////////CLOSE GAME BUTTON////////////////////////////////////////////

  closeGame.addEventListener('click', () => {
    startWindow.style.display = 'flex'
    startWindow.style.transition = '3s linear'
    startWindow.style.opacity = '1'
    buttonStart.classList.add('buttonStartAfterClose')
    gameContent.style.display = 'none'
    scoreAfterGame.style.display = 'block'
    scoreAfterGame.innerHTML = ` Your Win: ${totalScoreWin} <br>
                               Your Lose: ${totalScoreLose}`
    
  })





  

})