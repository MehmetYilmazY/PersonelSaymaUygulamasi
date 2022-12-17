let count = 0;
let personelSayi = document.getElementById("sayiSaydir");
let gecmisSayi = document.getElementById("gecmisGirisler")

function arttirma() {
  count = count + 1;
  personelSayi.innerText = count;
}

function azaltma() {
  count = count - 1;
  personelSayi.innerText = count;
}

function sifirlama() {
  count = count * 0;
  personelSayi.innerText = count;
}

function kaydetme() {
  let sayiStr = count + " - "
  gecmisSayi.textContent += sayiStr
  sayiStr = textContent = 0
  count = 0;
}
