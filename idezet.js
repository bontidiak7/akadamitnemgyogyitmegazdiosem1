
const idezetek = [
  { szoveg: "Az akadály nem az útban van, hanem maga az út.", szerzo: "Marcus Aurelius" },
  { szoveg: "A siker nem végleges, a kudarc nem végzetes: a bátorság számít továbbmenni.", szerzo: "Winston Churchill" },
  { szoveg: "A változás az élet törvénye.", szerzo: "John F. Kennedy" },
  { szoveg: "A tudás hatalom.", szerzo: "Francis Bacon" },
  { szoveg: "Az élet olyan, mint a biciklizés. Ahhoz, hogy egyensúlyban maradj, mozgásban kell maradnod.", szerzo: "Albert Einstein" },
  { szoveg: "A jövőt azok alakítják, akik hisznek álmaik szépségében.", szerzo: "Eleanor Roosevelt" },
  { szoveg: "A legnagyobb dicsőség nem az, hogy soha nem bukunk el, hanem az, hogy minden bukás után felállunk.", szerzo: "Confucius" },
  { szoveg: "Az idő, amit elvesztegetünk, soha nem jön vissza.", szerzo: "Benjamin Franklin" },
  { szoveg: "A boldogság nem kész dolog. Rajtad múlik.", szerzo: "Dalai Láma" },
  { szoveg: "A legjobb módja annak, hogy megjósoljuk a jövőt, ha mi magunk teremtjük meg.", szerzo: "Peter F. Drucker" }
];

let aktualisIndex = 0;
let kedvencek = [];

const idezetSzoveg = document.getElementById('idezet-szoveg');
const idezetSzerzo = document.getElementById('idezet-szerzo');
const balGomb = document.getElementById('bal-gomb');
const jobbGomb = document.getElementById('jobb-gomb');
const kedvencGomb = document.getElementById('kedvenc-gomb');
const kedvencekLista = document.getElementById('kedvencek-lista');

function frissitIdezet() {
  const idezet = idezetek[aktualisIndex];
  idezetSzoveg.textContent = idezet.szoveg;
  idezetSzerzo.textContent = `– ${idezet.szerzo}`;

  balGomb.disabled = aktualisIndex === 0;

  jobbGomb.disabled = aktualisIndex === idezetek.length - 1;
}


function balraLep() {
  if (aktualisIndex > 0) {
    aktualisIndex--;
    frissitIdezet();
  }
}


function jobbraLep() {
  if (aktualisIndex < idezetek.length - 1) {
    aktualisIndex++;
    frissitIdezet();
  }
}

function kedvenchezAd() {
  const idezet = idezetek[aktualisIndex];
  if (!kedvencek.some(k => k.szoveg === idezet.szoveg && k.szerzo === idezet.szerzo)) {
    kedvencek.push(idezet);
    frissitKedvencekLista();
  }
}

function frissitKedvencekLista() {
  kedvencekLista.innerHTML = '';
  kedvencek.forEach(idezet => {
    const li = document.createElement('li');
    li.textContent = `${idezet.szoveg} – ${idezet.szerzo}`;
    kedvencekLista.appendChild(li);
  });
}

balGomb.addEventListener('click', balraLep);
jobbGomb.addEventListener('click', jobbraLep);
kedvencGomb.addEventListener('click', kedvenchezAd);
frissitIdezet();