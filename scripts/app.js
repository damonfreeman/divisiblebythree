
function byThree2() {
  document.getElementById("numberfield").innerHTML = "";
}

function byThree1() {
  var yourNum = prompt("Type in any number 100 and click OK",);
  var myNumb = prompt("Type in any number 3 or 5 or 7 to see which numbers 100 are divisible by",);
  if(yourNum <= 100) {
    for(var i = 1; i < yourNum; i++) {
      if(i % myNumb != 0) {
        document.getElementById("numberfield").innerHTML += i + " ";
    } else {
        document.getElementById("numberfield").innerHTML += "MATCH ";
    } 
  } 
  
    } else {
      document.getElementById("numberfield").innerHTML += "Enter a lower base number between 1 and 100. Then enter another that your first number should be divided by ";
    }
    
}
