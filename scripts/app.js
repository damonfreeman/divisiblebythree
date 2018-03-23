function byThree2() {
  document.getElementById("numberfield").innerHTML = "";
}

function byThree1() {
  var yourNum = prompt("Type in the number 100 and click OK",);
  for(var i = 1; i < yourNum; i++) {
    if(i % 3 != 0) {
      document.getElementById("numberfield").innerHTML += i + " ";
  } else {
      document.getElementById("numberfield").innerHTML += "MATCH ";
  }
    }
    
}
