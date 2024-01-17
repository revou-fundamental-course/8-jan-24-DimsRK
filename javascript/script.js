function keliling() {
    let sisiPersegi= document.getElementById("perimeterInput").value;
    let kelilingPersegi= parseFloat(sisiPersegi) * 4
    console.log(kelilingPersegi)
    document.getElementById("resultPer").innerHTML = "<p></p>" + kelilingPersegi;
}

function luas() {
    let sisiPersegi= document.getElementById("areaInput").value;
    let luasPersegi= parseFloat(sisiPersegi) * parseFloat(sisiPersegi)
    console.log(luasPersegi)
}