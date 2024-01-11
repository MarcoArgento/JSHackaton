//es1

function cambiaColore() {
  document.getElementById("es1").style.backgroundColor =
    document.getElementById("colore").value;
  if (document.getElementById("colore").value == "#ffffff")
    document.getElementById("num").style.color = "black";
  if (document.getElementById("colore").value != "#ffffff")
    document.getElementById("num").style.color = "white";
}

//es2

function scrivi() {
  if (document.getElementById("testo").value == "") alert("Scrivi qualcosa");
  else {
    document.getElementById("newelem").innerHTML =
      document.getElementById("testo").value;
    document.getElementById("testo").value = "";
  }
}

//es4

function elimina() {
  document.getElementById("rim").remove();
}

//es5

let colori = [
  "red",
  "white",
  "orange",
  "black",
  "pink",
  "blue",
  "aqua",
  "green",
  "aquamarine",
  "greenyellow",
];

//es6

document.getElementById("paragrafo6").style.visibility = "visible";
document.getElementById("nascondiMostra").innerHTML = "NASCONDI";

function mostraNascondi() {
  if (document.getElementById("paragrafo6").style.visibility == "visible") {
    document.getElementById("nascondiMostra").innerHTML = "MOSTRA";
    document.getElementById("paragrafo6").style.visibility = "hidden";
  } else {
    document.getElementById("nascondiMostra").innerHTML = "NASCONDI";
    document.getElementById("paragrafo6").style.visibility = "visible";
  }
}

//es7

let par = document.getElementById("ParTarget");
let nuovoP = document.getElementById("nuovopar");
let sp = document.getElementById("conferma");

function modificaPar() {
  nuovoP.value = par.innerHTML;
  par.style.visibility = "hidden";
  nuovoP.style.visibility = "visible";
  sp.disabled = false;
}

function confermaMod() {
  par.innerHTML = nuovoP.value;
  nuovoP.style.visibility = "hidden";
  par.style.visibility = "visible";
  sp.disabled = true;
}

//es8

let im = document.getElementById("universo2");

function modDim() {
  im.style.width = "100%";
  im.style.height = "100%";
}

//es9

let par2 = document.getElementById("parCol");

function cambioColorePar() {
  let x;
  x = parseInt(Math.floor(Math.random() * 10));

  while (par2.style.color == colori[x])
    x = parseInt(Math.floor(Math.random() * 10));

  par2.style.color = colori[x];
}

//es10

let btn = document.getElementsByClassName("btn");

function mostraAlert() {
  alert("Hai cliccato sul bottone con scritto: " + this.innerHTML);
}

for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", mostraAlert);

//es13

function addElemLi() {
  if (document.getElementById("addElem").value == "")
    alert("Scrivi qualcosa!!!");
  else {
    let x = document.getElementById("list2");
    let z = x.appendChild(document.createElement("li"));
    let y = document.createTextNode(document.getElementById("addElem").value);
    z.appendChild(y);
    document.getElementById("addElem").value = "";
  }
}

//es14

let quanti = 0;
document.getElementById("contatore").innerHTML = quanti;
function contaClick() {
  quanti += 1;
  document.getElementById("contatore").innerHTML = quanti;
}

//es15

let par3 = document.getElementById("divTar");

function cambioColoreDiv() {
  let x;
  x = parseInt(Math.floor(Math.random() * 10));

  while (par3.style.backgroundColor == colori[x])
    x = parseInt(Math.floor(Math.random() * 10));

  par3.style.backgroundColor = colori[x];
}

par3.addEventListener("mouseout", cambioColoreDiv);

//es16

let curr;
let immagini = document.getElementsByClassName("small");

function changeImg() {
  if (this.src != document.getElementById("maxi").src) {
    curr = document.getElementById("maxi").src;
    document.getElementById("maxi").src = this.src;
    this.src = curr;
  }
}

for (let i = 0; i < immagini.length; i++)
  immagini[i].addEventListener("mouseover", changeImg);

//es18

let fig = document.getElementById("anim");
let fr = document.getElementsByClassName("FrecciaDir");
let mov = 0;
let largh = 20;

function muovi() {
  if (this.id == "muovi-d") {
    if (mov < -80) {
      largh += 1;
      fig.style.width = largh + "%";
    }

    if (mov > 79) {
      largh -= 1;
      fig.style.width = largh + "%";
    }

    if (largh <= 0) {
      largh = 0;
      mov = -100;
    }

    mov += 1;
    fig.style.marginLeft = mov + "%";
  } else {
    if (mov > 80) {
      largh += 1;
      fig.style.width = largh + "%";
    }

    if (mov < -79) {
      largh -= 1;
      fig.style.width = largh + "%";
    }
    if (largh <= 0) {
      largh = 0;
      mov = 100;
    }
    mov -= 1;
    fig.style.marginLeft = mov + "%";
  }
}

for (let i = 0; i < fr.length; i++) fr[i].addEventListener("click", muovi);

//es19

let inp = document.getElementById("testoadd");
let out = document.getElementById("testo2");

function addText() {
  out.innerHTML = this.value;
}

inp.addEventListener("keyup", addText);
//inp.addEventListener("input", addText);

//es20

let ckVis = document.getElementById("ck-vis");

let vis = document.getElementById("vis");
vis.style.visibility = "hidden";

function visNotVis() {
  if (vis.style.visibility == "hidden") vis.style.visibility = "visible";
  else vis.style.visibility = "hidden";
}

ckVis.addEventListener("click", visNotVis);

//es21

let parsty = document.getElementById("par-sty");
let insty = document.getElementById("ad-style");

function cambiaStile() {
  parsty.style.fontFamily = this.value;
}

insty.addEventListener("input", cambiaStile);

//es22

let slide = [
  "universo.jpeg",
  "tramonto giungla.jpeg",
  "scale a chiocciola.jpg",
  "pontile.jpeg",
  "nasa.jpg",
  "medusa.jpeg",
  "illusione.jpeg",
  "IA.jpg",
  "Euclid-ERO-Horsehead-scaled.jpg",
];

let scorr = document.getElementsByClassName("scorr");
let i = 0;
let immSl = document.getElementById("slider");
immSl.src = slide[i];

function scorriSlide() {
  if (this.id == "btn-s") {
    i += 1;
    if (i == slide.length) i = 0;
    immSl.src = slide[i];
  } else {
    i -= 1;
    if (i < 0) i = slide.length - 1;
    immSl.src = slide[i];
  }
}
for (let s = 0; s < scorr.length; s++)
  scorr[s].addEventListener("click", scorriSlide);

//es23

let diss = document.getElementsByClassName("dis");
let butdis = document.getElementById("btn-dis");
let divdis = document.getElementById("div-dis");
let db = 0;
let dd = 1;
butdis.style.opacity = 0;
butdis.style.zIndex = "0";
divdis.style.opacity = 1;
let disDiv;
let disBut;

function dissolvi() {
  if (this.id == "div-dis") {
    if (butdis.style.zIndex == "0") {
      butdis.style.visibility = "visible";
      butdis.style.zIndex = "1";
    }
    if (divdis.style.opacity > 0) {
      disDiv = setInterval(function () {
        dd -= parseFloat(0.01);
        divdis.style.opacity = dd;
        db += parseFloat(0.01);
        butdis.style.opacity = db;
        if (dd <= 0 && db >= 1) {
          dd = 0;
          db = 1;
          divdis.style.visibility = "hidden";
          divdis.style.zIndex = "0";
          clearInterval(disDiv);
        }
      }, 16);
      this.classList.add("transition");
    }
  } else {
    if (divdis.style.zIndex == "0") {
      divdis.style.visibility = "visible";
      divdis.style.zIndex = "1";
    }
    if (butdis.style.opacity > 0) {
      disBut = setInterval(function () {
        dd += parseFloat(0.01);
        divdis.style.opacity = dd;
        db -= parseFloat(0.01);
        butdis.style.opacity = db;
        if (db <= 0 && dd >= 1) {
          dd = 1;
          db = 0;
          butdis.style.visibility = "hidden";
          butdis.style.zIndex = "0";
          clearInterval(disBut);
        }
      }, 16);
    }
  }
}

for (let i = 0; i < diss.length; i++)
  diss[i].addEventListener("click", dissolvi);

//es24
let btnst = document.getElementsByClassName("btn-fun");
let inH = document.getElementById("dig-h");
let inM = document.getElementById("dig-min");
let inS = document.getElementById("dig-sec");
inH.value = 0;
inM.value = 0;
inS.value = 0;

let h = 0;
let m = 0;
let s = 0;
let conta;

document.getElementById("ore").innerHTML = parseInt(h);
document.getElementById("minuti").innerHTML = parseInt(m);
document.getElementById("secondi").innerHTML = parseInt(s);

function avvioArresto() {
  if (this.id == "avvio") {
    if (
      parseInt(inH.value) < 0 ||
      parseInt(inS.value) < 0 ||
      parseInt(inM.value) < 0
    ) {
      alert(
        "Valori non validi. Tutti i campi devono avere valori positivi o uguali a 0"
      );
    } else if (parseInt(inS.value) >= 60 || parseInt(inM.value) >= 60) {
      alert(
        "Valori non validi. Tutti i campi devono avere valori compresi tra 0 e 59"
      );
    } else if (inS.value == "" || inM.value == "" || inH.value == "") {
      alert("Valore non valido");
    } else {
      document.getElementById("reset").disabled = true;
      document.getElementById("avvio").disabled = true;
      h = inH.value;
      s = inS.value;
      m = inM.value;
      inH.style.visibility = "hidden";
      inM.style.visibility = "hidden";
      inS.style.visibility = "hidden";
      conta = setInterval(function () {
        if (s == 0) {
          if (m > 0) {
            m -= parseInt(1);
            s = parseInt(59);
            document.getElementById("minuti").innerHTML = m;
            document.getElementById("secondi").innerHTML = s;
          } else if (h > 0) {
            m = 59;
            h -= 1;
            s = 59;
            document.getElementById("minuti").innerHTML = m;
            document.getElementById("ore").innerHTML = h;
            document.getElementById("secondi").innerHTML = s;
          } else if (h == 0 && m == 0 && s == 0) {
            clearInterval(conta);
            document.getElementById("reset").disabled = false;
            document.getElementById("avvio").disabled = false;
            inH.value = h;
            inS.value = s;
            inM.value = m;
            document.getElementById("minuti").innerHTML = m;
            document.getElementById("ore").innerHTML = h;
            document.getElementById("secondi").innerHTML = s;
            inH.style.visibility = "visible";
            inM.style.visibility = "visible";
            inS.style.visibility = "visible";
          }
        } else {
          s -= 1;
          document.getElementById("secondi").innerHTML = s;
          document.getElementById("minuti").innerHTML = m;
          document.getElementById("ore").innerHTML = h;
        }
      }, 1000);
    }
  } else if (this.id == "arresto") {
    document.getElementById("reset").disabled = false;
    document.getElementById("avvio").disabled = false;
    inH.value = h;
    inS.value = s;
    inM.value = m;
    inH.style.visibility = "visible";
    inM.style.visibility = "visible";
    inS.style.visibility = "visible";
    clearInterval(conta);
  } else {
    document.getElementById("ore").innerHTML = 0;
    document.getElementById("minuti").innerHTML = 0;
    document.getElementById("secondi").innerHTML = 0;
    h = 0;
    m = 0;
    s = 0;
    inH.value = h;
    inS.value = s;
    inM.value = m;
  }
}

for (let i = 0; i < btnst.length; i++)
  btnst[i].addEventListener("click", avvioArresto);

//es25

let cx = document.getElementById("coord-x");
let cy = document.getElementById("coord-y");
let dvcoor = document.getElementById("div-coord");

function coordinate(event) {
  cx.innerHTML = "x: " + event.clientX;
  cy.innerHTML = "y: " + event.clientY;
}

dvcoor.addEventListener("mousemove", coordinate);

//es26

let listaSf = document.getElementById("list-sf");
let esvs = document.getElementById("es26");

function cambiaSfondo() {
  if (this.value == "standard") esvs.style.backgroundImage = "none";
  else esvs.style.backgroundImage = `url("${this.value}")`;
}

listaSf.addEventListener("click", cambiaSfondo);

//es27

let perCar = document.getElementById("perc-car");
let barCar = document.getElementById("bar-car");
let btcar = document.getElementById("aum-perc");
let perc = 0;
perCar.innerHTML = 0 + "%";

function aumPercCar() {
  perc += 10;
  perCar.innerHTML = perc + "%";
  barCar.style.width = perCar.innerHTML;
  if (barCar.style.width == "100%") this.disabled = true;
}

btcar.addEventListener("click", aumPercCar);

//es28
var InpOblig = document.getElementsByClassName("Oblig");
function segna() {
  if (this.value === "") {
    this.setCustomValidity("Campo obbligatorio");
    this.nextSibling.nextSibling.innerHTML = "Campo obbligatorio";
  } else {
    this.nextSibling.nextSibling.innerHTML = "";
    this.setCustomValidity("");
  }
  if (this.id == "Inp-mail") {
    let x = /\w+@\w+\.\w{2,4}/i;
    if (x.test(this.value) == false) {
      this.nextSibling.nextSibling.innerHTML =
        "Inserisci un indirizzo email valido";
      this.setCustomValidity("Campo obbligatorio");
    } else {
      this.nextSibling.nextSibling.innerHTML = "";
      this.setCustomValidity("");
    }
  }
}

for (let i = 0; i < InpOblig.length; i++)
  InpOblig[i].addEventListener("blur", segna);

//es29 Fatto soltanto con HTML e CSS

//es30

let img = document.getElementById("img-drag");
let posX = 0;
let posY = 0;

let posT = 15;
let posL = 15;

let posTT = 15;
let posTL = 15;

let primaP = false;
let primaT = true;

img.ondragstart = function (e) {
  e.dataTransfer.setData("text", e.target.id);
  posX = e.clientX;
  posY = e.clientY;
};

let divTarget = document.getElementById("div-target");
divTarget.ondragover = function (e) {
  e.target.className = "overClass";
  e.preventDefault();
};

divTarget.ondrop = function (e) {
  posL = 15;
  posT = 15;
  if (primaT == true) {
    img.style.left = posTL + "px";
    img.style.top = posTT + "px";
    primaT = false;
    primaP = true;
  } else {
    posTL += e.clientX - posX;
    posTT += e.clientY - posY;
    img.style.left = posTL + "px";
    img.style.top = posTT + "px";
  }
  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  e.preventDefault();
  document.onmouseup = CloseDragElement;
};

let divPart = document.getElementById("cont-imm-drag");
divPart.ondragover = function (e) {
  e.preventDefault();
};

divPart.ondrop = function (e) {
  posTL = 15;
  posTT = 15;
  if (primaP == true) {
    img.style.left = posL + "px";
    img.style.top = posT + "px";
    primaP = false;
    primaT = true;
  } else {
    posL += e.clientX - posX;
    posT += e.clientY - posY;
    img.style.left = posL + "px";
    img.style.top = posT + "px";
  }

  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
  e.preventDefault();
  document.onmouseup = CloseDragElement;
};

function CloseDragElement() {
  document.onmousemove = null;
  document.onmouseup = null;
}

//es31

let genNum = document.getElementById("gen-num");
let contNum = document.getElementById("cont-num");

function generaNum() {
  contNum.innerHTML =
    "Numero generato: " + parseInt(Math.floor(Math.random() * 1001));
}

genNum.addEventListener("click", generaNum);

//es32

let genAnim = document.getElementsByClassName("gen-anim");
let divAnim = document.getElementById("div-animato");
let animazione;
let val = 0;
let dimens = 20;
let max = false;
let col;

function animDiv() {
  if (this.id == "avvia-anim") {
    animazione = setInterval(function () {
      if (max == false) {
        dimens += 1;
        divAnim.style.width = dimens + "%";
        divAnim.style.height = dimens + "%";
        if (dimens == 27) max = true;
      } else {
        dimens -= 1;
        divAnim.style.width = dimens + "%";
        divAnim.style.height = dimens + "%";
        if (dimens == 10) max = false;
      }
      val += 1;
      divAnim.style.rotate = val + "deg";
      col = parseInt(Math.floor(Math.random() * colori.length));
      divAnim.style.backgroundColor = colori[col];
    }, 170);
    document.getElementById("avvia-anim").disabled = true;
    document.getElementById("ferma-anim").disabled = false;
  } else {
    document.getElementById("avvia-anim").disabled = false;
    document.getElementById("ferma-anim").disabled = true;
    clearInterval(animazione);
    divAnim.style.width = 20 + "%";
    divAnim.style.height = 20 + "%";
    divAnim.style.rotate = 0 + "deg";
    divAnim.style.backgroundColor = "red";
    val = 0;
    dimens = 20;
    max = false;
  }
}

for (let i = 0; i < genAnim.length; i++)
  genAnim[i].addEventListener("click", animDiv);

//es33

let hour = document.getElementById("hour");
let orario;

setInterval(function () {
  orario = new Date();
  hour.innerText =
    orario.getHours() +
    " : " +
    orario.getMinutes() +
    " : " +
    orario.getSeconds();
}, 1000);

//es34

let scorr2 = document.getElementsByClassName("scorr2");
let i2 = 0;
let immSl2 = document.getElementById("slider2");
immSl2.src = slide[i2];
let ridim = document.getElementById("ridim");

function scorriSlide2() {
  if (this.id == "btn-s2") {
    i2 += 1;
    if (i2 == slide.length) i2 = 0;
    immSl2.src = slide[i2];
  } else {
    i2 -= 1;
    if (i2 < 0) i2 = slide.length - 1;
    immSl2.src = slide[i2];
  }
}

function ridimensiona() {
  immSl2.style.width = this.value + "%";
  immSl2.style.height = this.value + "%";
}

ridim.addEventListener("input", ridimensiona);

for (let s = 0; s < scorr2.length; s++)
  scorr2[s].addEventListener("click", scorriSlide2);

//es35

let Tab = document.getElementsByClassName("tab");
let contenTab = document.getElementsByClassName("conten-tab");

function mostraTab() {
  for (let i = 0; i < contenTab.length; i++) {
    if (this.innerHTML != contenTab[i].innerHTML)
      contenTab[i].classList.remove("active");
    else contenTab[i].classList.add("active");
  }
}

for (let i = 0; i < Tab.length; i++)
  Tab[i].addEventListener("click", mostraTab);

//es36

let comm = document.getElementsByClassName("comm");
let divCont = document.getElementById("cont-elem");

function disponi() {
  if (this.id == "riga") divCont.style.flexDirection = "row";
  else divCont.style.flexDirection = "column";
}

for (let i = 0; i < comm.length; i++)
  comm[i].addEventListener("click", disponi);

//es37

let risp = document.getElementsByClassName("risp");
let giusta;
let giuste = 0;
let tentativi = 3;
let t;
let v;
document.getElementById("punti").innerHTML = giuste;
document.getElementById("vite").innerHTML = tentativi;

function genera() {
  let t;
  v = true;
  let c;
  let y;
  t = document.getElementById("game");

  for (let i = 1; i < t.childNodes.length; i += 2) {
    if (v == true) {
      y = parseInt(Math.floor(Math.random() * 12));
      if (y % 2 == 0) y += 1;
      i = -1;
      t.childNodes[y].innerHTML = parseInt(Math.floor(Math.random() * 11));
      giusta = t.childNodes[y].innerHTML;
      v = false;
    } else {
      c = parseInt(Math.floor(Math.random() * 11));

      while (c == giusta) c = parseInt(Math.floor(Math.random() * 11));

      if (i == y) continue;

      t.childNodes[i].innerHTML = c;
    }
  }
}

genera();

function calcola() {
  if (this.innerHTML == giusta) giuste += 1;
  else tentativi -= 1;
  document.getElementById("punti").innerHTML = giuste;
  document.getElementById("vite").innerHTML = tentativi;
  if (tentativi != 0) genera();
  if (tentativi == 0)
    if (confirm("GAME OVER!!! RIPROVARE?") == true) {
      tentativi = 3;
      giuste = 0;
      document.getElementById("punti").innerHTML = giuste;
      document.getElementById("vite").innerHTML = tentativi;
      genera();
    } else for (let i = 0; i < risp.length; i++) risp[i].disabled = true;
}

for (let i = 0; i < risp.length; i++) {
  risp[i].addEventListener("click", calcola);
}

//es38

let textEdit = document.getElementById("text-edit");
let options = document.getElementsByClassName("formatt");
let CharCode;
let cors = false;

function formatta() {
  if (this.id == "bold")
    if (cors == false) {
      textEdit.document.execCommand("bold", false, null);
      cors = true;
    } else {
      textEdit.execCommand("normal", null);
      cors = false;
    }
  //textEdit.style.fontWeight = "bold";
  // else textEdit.innerHTML = `<b>`;
  else if (this.id == "italic") textEdit.style.fontStyle = "italic";
  else textEdit.style.fontStyle = "normal";
}

//`url("${this.value}")`;

function dec() {
  this.style.textDecoration = "none";
}

for (let i = 0; i < options.length; i++)
  options[i].addEventListener("click", formatta);

textEdit.addEventListener("click", dec);

let txtInput = document.getElementById("text-edit");
txtInput.onkeyup = function (e) {
  let charCode = e.which;
  console.log(charCode);
};
