function addbutton() {
    var gorevtanimla = document.getElementById("textlane").value;

    var girilenyazi = document.getElementById("task");
    
    girilenyazi.innerHTML = gorevtanimla;
}
// function delet() {
//     var delet = document.getElementById("task")
//     gorevtanimla.innerHTML = ""

// }

function delet() {
    var gorevtanimla = document.getElementById("task");
    gorevtanimla.innerHTML = "";
}