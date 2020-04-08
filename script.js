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
  

  /////////////////////////ALOITAME PELI////////////////////////////////////////

  buttonStart.addEventListener('click', () => {
    buttonStart.style.background = 'brown'
    startWindow.style.transition = '3s linear'
    startWindow.style.opacity = '.1'
    setTimeout(() => {
      startWindow.style.display = 'none'
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
        restartGame()
      }
    })
  })

///////////////////////////////PELIN ALOISTUS FUNCTION///////////////////////////////////////////////
  
  startGame = () => {
    gameContent.style.display = 'block'
  }

/////////////////////////////PELIN KÄYNNISTYS UUDELLEEN JOS PELI LOPPUU/////////////////////////////////////////////////

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





  

})