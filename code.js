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
const wallPos = {
  posX: [],
  posY: []
}
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
  let posArr = []

  let playerBox = document.getElementById('player')
  let wallDiv = document.querySelectorAll('#wallDiv')
  let currPosX = playerBox.offsetLeft
  let currPosY = playerBox.offsetTop
  let verif = Array(2)

  for (let eltWall in wallDiv) {
    let arrPos = Array(2)
    arrPos[0] = wallDiv[eltWall].offsetLeft
    arrPos[1] = wallDiv[eltWall].offsetTop
    posArr.push(`${arrPos}`)

  }
  
  if (event.key === 'ArrowUp') {
    
    verif[0] = playerBox.offsetLeft
    verif[1] = playerBox.offsetTop - 20
    
    if (posArr.includes(`${verif}`) === true) {
      playerBox.offsetTop = currPosY 
      playerBox.offsetLeft = currPosX 
    
    } else if (!posArr.includes(`${verif}`)){
    
      playerBox.style.top = playerBox.offsetTop -20 + 'px'
      playerBox.style.left = currPosX + 'px'
    }

  } else if (event.key === 'ArrowDown') {
    verif[0] = playerBox.offsetLeft
    verif[1] = playerBox.offsetTop + 20

    if (posArr.includes(`${verif}`) === true) {
      playerBox.offsetTop = currPosY
      playerBox.offsetLeft = currPosX 
    } else if (!posArr.includes(`${verif}`)) {
      playerBox.style.top = playerBox.offsetTop + 20 + 'px'
      playerBox.style.left = currPosX + 'px'
    }

  } else if (event.key === 'ArrowLeft') {
    verif[0] = playerBox.offsetLeft - 20
    verif[1] = playerBox.offsetTop

    if (posArr.includes(`${verif}`) === true) {
      playerBox.offsetTop = currPosY
      playerBox.offsetLeft = currPosX
    } else if (!posArr.includes(`${verif}`)) {
      playerBox.style.top = currPosY + 'px'
      playerBox.style.left = playerBox.offsetLeft - 20 + 'px'
    }

  } else if (event.key === 'ArrowRight') {
    verif[0] = playerBox.offsetLeft + 20
    verif[1] = playerBox.offsetTop

    if (posArr.includes(`${verif}`) === true) {
      playerBox.offsetTop = currPosY
      playerBox.offsetLeft = currPosX
    } else if (!posArr.includes(`${verif}`)) {
      playerBox.style.top = currPosY + 'px'
      playerBox.style.left = playerBox.offsetLeft + 20 + 'px'
    }
  }

}

