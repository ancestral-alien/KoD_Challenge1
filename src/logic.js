var isdark = false;
console.log(isdark);
function cambiarColor() {
  var changeColor = document.getElementsByName("div");
  console.log(changeColor);
  console.log("PASE POR cambiarColor de logicjs");

  if (isdark === false) {
    console.log("PASE POR DARK TRUE");

    changeColor.className = "App dark-theme";
    isdark = true;
  } else {
    console.log("PASE POR DARK FALSE");

    changeColor.className = "App light-theme";
    isdark = false;
  }
}
