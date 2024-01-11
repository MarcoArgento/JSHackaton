let programmi = [];
let canaleCorrente;
let canale = document.getElementById("channel");
let buttons = document.getElementsByClassName("canale");
let cc = 1;
let frecciaC = document.getElementsByClassName("freccia");

document.getElementById("black").style.visibility = "visible";
document.getElementById("spia").style.backgroundColor = "red";
document.getElementById("colore").value = "#DBC5C5";

//Generazione canali

for (let i = 1; i <= 38; i++) programmi[i] = "es" + i;

canaleCorrente = programmi[1];

//Mostra o nascondi le istruzioni

let instr = document.getElementById("instruction");
instr.style.visibility = "hidden";

function mostraNascondiIstruzioni() {
  if (instr.style.visibility == "hidden") {
    instr.style.visibility = "visible";
    instr.style.zIndex = "3";
  } else {
    instr.style.visibility = "hidden";
    instr.style.zIndex = "0";
  }
}

//Accensione spegnimento TV

function accendiSpegni() {
  if (document.getElementById("black").style.visibility == "visible") {
    document.getElementById("black").style.visibility = "hidden";
    document.getElementById("black").style.zIndex = "0";
    document.getElementById("spia").style.backgroundColor = "green";
    document.getElementById("canali").style.visibility = "visible";
    document.getElementById(canaleCorrente).style.visibility = "visible";
    document.getElementById(canaleCorrente).style.zIndex = "1";
  } else {
    canale.innerHTML = "";
    document.getElementById("black").style.visibility = "visible";
    document.getElementById("black").style.zIndex = "2";
    document.getElementById("spia").style.backgroundColor = "red";
    document.getElementById("canali").style.visibility = "hidden";
    document.getElementById(canaleCorrente).style.visibility = "hidden";
    document.getElementById(canaleCorrente).style.zIndex = "0";
  }
}

function evento() {
  let cambiaCanale = function () {
    if (document.getElementById("black").style.visibility == "visible") {
      alert("Prima accendi la TV");
    } else if (canale.innerHTML == "" && this.innerHTML == "0") {
      canale.innerHTML = "";
    } else if (canale.innerHTML != "") {
      canale.innerHTML += this.innerHTML;
    } else {
      canale.innerHTML = this.innerHTML;
    }
    let change = setTimeout(function () {
      if (
        parseInt(canale.innerHTML) >= programmi.length ||
        programmi[parseInt(canale.innerHTML)] == canaleCorrente
      ) {
        canale.innerHTML = "";
      } else {
        if (canale.innerHTML != "") {
          document.getElementById(canaleCorrente).style.visibility = "hidden";
          document.getElementById(canaleCorrente).style.zIndex = "0";
          cc = parseInt(canale.innerHTML);
          canaleCorrente = programmi[cc];
          document.getElementById(canaleCorrente).style.visibility = "visible";
          document.getElementById(canaleCorrente).style.zIndex = "1";
          canale.innerHTML = "";
        }
      }
    }, 1500);
  };
  for (let i = 0; i <= buttons.length; i++)
    buttons[i].addEventListener("click", cambiaCanale);
}

function avantiIndietro() {
  if (document.getElementById("black").style.visibility == "visible")
    alert("Prima accendi la TV");
  else {
    canale.innerHTML = "";
    document.getElementById(canaleCorrente).style.visibility = "hidden";
    document.getElementById(canaleCorrente).style.zIndex = "0";
    if (this.id == "btn-Su")
      if (canaleCorrente == programmi[programmi.length - 1]) {
        cc = 1;
      } else {
        cc += 1;
      }
    if (this.id == "btn-Giu")
      if (canaleCorrente == programmi[1]) {
        cc = parseInt(programmi.length - 1);
      } else cc -= 1;
    canaleCorrente = programmi[cc];
    document.getElementById(canaleCorrente).style.zIndex = "1";
    document.getElementById(canaleCorrente).style.visibility = "visible";
  }
}

for (let i = 0; i < frecciaC.length; i++)
  frecciaC[i].addEventListener("click", avantiIndietro);
