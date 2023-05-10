const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW"
];

// Your Code Here.
let containerEl = document.querySelector('.container')



// Draw the board

for (let i = 0; i < map.length; i++) {

  let mapRow = map[i]
  let rowMazeDiv = document.createElement('div')

  rowMazeDiv.setAttribute('style', 'display: flex; width: 420px ; ')

  for (let j = 0; j < mapRow.length; j++) {
    let cellMazeDiv = document.createElement('div')

    if (mapRow[j] === 'W') {
      cellMazeDiv.setAttribute('style', 'width: 20px; height: 20px; background-color: brown;')
      cellMazeDiv.setAttribute('id', 'wallDiv')

    } else if (mapRow[j] === ' ' || 'F' || 'S') {
      cellMazeDiv.setAttribute('style', 'width: 20px; height:20px; background-color: white;')
    }
    rowMazeDiv.append(cellMazeDiv)
  }
  containerEl.append(rowMazeDiv)
}

//Draw the player
drawPlayer()
function drawPlayer() {

  let playerDiv = document.createElement('div')

  playerDiv.setAttribute('style', 'background-color: blue; width: 20px;height: 20px; position: absolute; left: 0; top: 180px ')
  playerDiv.setAttribute('id', 'player')

  containerEl.append(playerDiv)
}

// player moving
window.addEventListener('keydown', moves)

function moves(event) {
  let wallPositionsStore = []

  let playerBox = document.getElementById('player')
  let wallDiv = document.querySelectorAll('#wallDiv')

  let currentPlayerPosX = playerBox.offsetLeft
  let currentPlayerPosY = playerBox.offsetTop
  console.log(currentPlayerPosX, currentPlayerPosY)
  let playerPosAfterMoves = Array(2)

  for (let eltWall in wallDiv) {
    let elementWallPositions = Array(2)
    elementWallPositions[0] = wallDiv[eltWall].offsetLeft
    elementWallPositions[1] = wallDiv[eltWall].offsetTop
    wallPositionsStore.push(`${elementWallPositions}`)

  }
  
  if (event.key === 'ArrowUp') {
    
    playerPosAfterMoves[0] = playerBox.offsetLeft
    playerPosAfterMoves[1] = playerBox.offsetTop - 20
    
    if (wallPositionsStore.includes(`${playerPosAfterMoves}`) === true) {
      playerBox.offsetTop = currentPlayerPosY 
      playerBox.offsetLeft = currentPlayerPosX 
    
    } else if (!wallPositionsStore.includes(`${playerPosAfterMoves}`)){
    
      playerBox.style.top = playerBox.offsetTop -20 + 'px'
      playerBox.style.left = currentPlayerPosX + 'px'
    }

  } else if (event.key === 'ArrowDown') {
    playerPosAfterMoves[0] = playerBox.offsetLeft
    playerPosAfterMoves[1] = playerBox.offsetTop + 20

    if (wallPositionsStore.includes(`${playerPosAfterMoves}`) === true) {
      playerBox.offsetTop = currentPlayerPosY
      playerBox.offsetLeft = currentPlayerPosX 
    } else if (!wallPositionsStore.includes(`${playerPosAfterMoves}`)) {
      playerBox.style.top = playerBox.offsetTop + 20 + 'px'
      playerBox.style.left = currentPlayerPosX + 'px'
    }

  } else if (event.key === 'ArrowLeft') {
    playerPosAfterMoves[0] = playerBox.offsetLeft - 20
    playerPosAfterMoves[1] = playerBox.offsetTop

    if (wallPositionsStore.includes(`${playerPosAfterMoves}`) === true || playerPosAfterMoves[0] < 0) {
      playerBox.offsetTop = currentPlayerPosY
      playerBox.offsetLeft = currentPlayerPosX
    } else if (!wallPositionsStore.includes(`${playerPosAfterMoves}`)) {
      playerBox.style.top = currentPlayerPosY + 'px'
      playerBox.style.left = playerBox.offsetLeft - 20 + 'px'
    }

  } else if (event.key === 'ArrowRight') {
    playerPosAfterMoves[0] = playerBox.offsetLeft + 20
    playerPosAfterMoves[1] = playerBox.offsetTop

    if (wallPositionsStore.includes(`${playerPosAfterMoves}`) === true ) {
      playerBox.offsetTop = currentPlayerPosY
      playerBox.offsetLeft = currentPlayerPosX
    } else if (!wallPositionsStore.includes(`${playerPosAfterMoves}`)) {
      playerBox.style.top = currentPlayerPosY + 'px'
      playerBox.style.left = playerBox.offsetLeft + 20 + 'px'
    }
  }
gameOver(playerBox)
}

function gameOver(myParam){

  if ( myParam.offsetLeft === 380 && myParam.offsetTop === 160) {
    document.body.classList.add('active')
    containerEl.style.display = 'none'

    document.getElementById('gameOver').style.display = 'flex'
  }

}

