var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var positionX = 0;
var positionY = 0;

function drawCheckeredPattern(row,col) {
  for (var i = 1; i <= row; i++) {
    positionX = 0;
    if (i % 2 === 1) {
      for (var j = 1; j <= col; j++) {
        if (j % 2 === 1) {
          context.fillStyle = 'white';
        } else if (j % 2 === 0) {
          context.fillStyle = 'black';
        } else {
          alert('An error occurred.')
        }
        context.fillRect(positionX, positionY, canvas.width / col, canvas.height / row);
        positionX += canvas.width / col;
      }
    } else if (i % 2 === 0) {
      for (var j = 1; j <= col; j++) {
        if (j % 2 === 1) {
          context.fillStyle = 'black';
        } else if (j % 2 === 0) {
          context.fillStyle = 'white';
        } else {
          alert('An error occurred.')
        }
        context.fillRect(positionX, positionY, canvas.width / col, canvas.height / row);
        positionX += canvas.width / col;
      }
    } else {
      alert('An error occurred.')
    }
    positionY += canvas.height / row;
  }
}

drawCheckeredPattern(8,8);