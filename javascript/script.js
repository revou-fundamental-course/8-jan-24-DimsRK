function keliling() {
    let sisiPersegi= document.getElementById("perimeterInput").value;
    let kelilingPersegi= parseFloat(sisiPersegi) * 4
    console.log(kelilingPersegi)
    document.getElementById("perResult").innerHTML = /*"<p>Keliling Persegi Adalah :</p>"*/ + kelilingPersegi;
}

function luas() {
    let sisiPersegi= document.getElementById("areaInput").value;
    let luasPersegi= parseFloat(sisiPersegi) * parseFloat(sisiPersegi)
    console.log(luasPersegi)
    document.getElementById("resultAre").innerHTML = "<p>Luas Persegi Adalah :</p>" + luasPersegi;
}

function reset1() {
    var resultPer = document.getElementById("perResult");
    var perimeterSide = document.getElementById("perimeterInput");
  
    if (resultPer) {
      resultPer.innerHTML = "";
    }
  
    if (perimeterSide) {
      perimeterSide.value = "";
    }
} 

function reset2() {
    var resultAre = document.getElementById("areResult");
    var areaSide = document.getElementById("areaInput");
  
    if (resultAre) {
      resultAre.innerHTML = "";
    }
  
    if (areaSide) {
      areaSide.value = "";
    }
} 
  
/*function reset() {
    document.getElementsByClassName("perimeterInput").value = "";
    document.getElementById("result").innerHTML = "";
}  
*/
