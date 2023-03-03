
// effet du cube onmousehover

let el = document.getElementById('tilt');

let height = effect.clientHeight
let width = effect.clientWidth

effect.addEventListener('mousemove', handleMove)


function handleMove(effect) {
  let xVal = effect.layerX
  let yVal = effect.layerY

  //   Change la valeur (50) pour augmenter la vitesse de rotation du cube
  let yRotation = 60 * ((xVal - width / 2) / width);
  let xRotation = -60 * ((yVal - height / 2) / height);

  let string = 'rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
  el.style.transform = string;
  el.style.transition = "200ms";
}

effect.addEventListener('mouseout', function () {
  el.style.transform = string;
  el.style.transition = "400ms";
})




// annimations arrivée sur le site
setTimeout(() => {
  let effect1 = document.getElementById('effet1');
  effect1.style.transition = "1s";
  effect1.style.opacity = "1";
}, 3500);


let message2 = "JOSEPH LEO";
I = -15;
function annimationtxt2() {
  character = message2.substring(I, I = I + 1);
  effet4.innerHTML += character;
  if (I < message2.length) setTimeout(annimationtxt2, 100);
}
setTimeout(() => {
  annimationtxt2()
}, 650);






let cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + 30 + "px",
    cursor.style.top = e.clientY + 30 + "px";
});



let logoHtml = document.getElementById("html");
let textHtml = document.getElementById("textHtml");

let logoCss = document.getElementById("css");
let textCss = document.getElementById("textCss");

let logoJs = document.getElementById("js");
let textJs = document.getElementById("textJs");

let logoPhp = document.getElementById("php");
let textPhp = document.getElementById("textPhp");

let logoSql = document.getElementById("sql");
let textSql = document.getElementById("textSql");



// fonction qui fait l'arrivée du texte des logos page "mes compétences"
function txt(logo, texte) {
  logo.addEventListener('mouseover', () => {
    texte.style.display = 'block';
    setTimeout(() => {
      overtxt(texte);
    }, 10);
  });
  logo.addEventListener('mouseout', () => {
      texte.style.display = 'none';
  })
}


function overtxt(param) {
  param.style.transition = '650ms';
  param.style.height = 'auto';
  param.style.opacity = '1';
  param.style.height ='auto';
}


txt(logoHtml, textHtml);
txt(logoCss, textCss);
txt(logoJs, textJs);
txt(logoPhp, textPhp);
txt(logoSql, textSql);








// fonction pour l'arrivée des pages en cliquant sur le menu de navigation



// page et bouton du bienvenue
let header = document.getElementById('header');
let btnBienvenue = document.getElementById('bienvenue');

// page et bouton de mes compétences
let competences = document.getElementById('section1');
let btnCompetences = document.getElementById('competences');

// page et bouton de mon travail
let btnTravail = document.getElementById('travail');
let travail = document.getElementById('section2');

// page et bouton de mon experience
let btnExperience = document.getElementById('experience');
let experience = document.getElementById('section3');

// page et bouton de contact
let contacter = document.getElementById('section4');
let btnContacter = document.getElementById('contacter');

btnBienvenue.addEventListener('click', () => {
  header.style.marginTop = '0';
  competences.style.marginTop = '100vh';
  travail.style.marginTop = '200vh';
  experience.style.marginTop = '300vh';
  contacter.style.marginTop = '400vh';
})

btnCompetences.addEventListener('click', () => {
  header.style.marginTop = '-100vh';
  competences.style.marginTop = '0';
  travail.style.marginTop = '100vh';
  experience.style.marginTop = '200vh';
  contacter.style.marginTop = '300vh';
})

btnTravail.addEventListener('click', () => {
  header.style.marginTop = '-200vh';
  competences.style.marginTop = '-100vh';
  travail.style.marginTop = '0';
  experience.style.marginTop = '100vh';
  contacter.style.marginTop = '200vh';
})

btnExperience.addEventListener('click', () => {
  header.style.marginTop = '-300vh';
  competences.style.marginTop = '-200vh';
  travail.style.marginTop = '-100vh';
  experience.style.marginTop = '0';
  contacter.style.marginTop = '100vh';
})

btnContacter.addEventListener('click', () => {
  header.style.marginTop = '-400vh';
  competences.style.marginTop = '-300vh';
  travail.style.marginTop = '-200vh';
  experience.style.marginTop = '-100vh';
  contacter.style.marginTop = '0';
})