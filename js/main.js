var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function calcFunc() {

  var input_X = Number(document.getElementById("input_X").value) * 2;
  var input_Y = Number(document.getElementById("input_Y").value) * 2;

  draw(input_X, input_Y);
}

function clearFunc(){
  location.reload();
}

function draw(input_X, input_Y) {

  var arr1 = [];
  var arr2 = [];

  for (i = 0; i < input_X; i++) {
    var x = Math.floor((Math.random() * 600) + 1);
    arr1.push(x);
  }

  for (i = 0; i < input_Y; i++) {
    var y = Math.floor((Math.random() * 600) + 1);
    arr2.push(y);
  }

  for (i = 0; i < arr1.length; i = i + 2) {

    var dist = 0;
    var distNear = 1000;
    var tempx1 = 0;
    var tempy1 = 0;
    var tempx2 = 0;
    var tempy2 = 0;

    x1 = arr1[i];
    y1 = arr1[i + 1];

    for (j = 0; j < arr2.length; j = j + 2) {

      x2 = arr2[j];
      y2 = arr2[j + 1];

      dist = Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y1 - y2), 2)));

      if (dist < distNear) {

        distNear = dist;
        tempx1 = x1;
        tempy1 = y1;

        tempx2 = x2;
        tempy2 = y2;
      }

    }

    ctx.moveTo(tempx1, tempy1);
    ctx.lineTo(tempx2, tempy2);
    ctx.stroke();
  }
}
