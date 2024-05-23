document.getElementById("toggleSwitch").addEventListener("change", function () {
  var luasForm = document.getElementById("luasForm");
  var kelilingForm = document.getElementById("kelilingForm");
  var toggleLabel = document.getElementById("toggleLabel");
  var rumusLuas = document.getElementById("rumusLuas");
  var rumusKeliling = document.getElementById("rumusKeliling");

  if (this.checked) {
    luasForm.style.display = "none";
    kelilingForm.style.display = "block";
    toggleLabel.textContent = "Switch Luas Segitiga";
    rumusLuas.style.display = "none";
    rumusKeliling.style.display = "block";
  } else {
    luasForm.style.display = "block";
    kelilingForm.style.display = "none";
    toggleLabel.textContent = "Switch Keliling Segitiga";
    rumusLuas.style.display = "block";
    rumusKeliling.style.display = "none";
  }
});

function hitungLuas() {
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);
  var hasilLuas = document.getElementById("hasilLuas");

  if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
    var luas = 0.5 * alas * tinggi;
    hasilLuas.textContent = "Luas Segitiga: " + luas.toFixed(2) + " cm²";
  } else {
    hasilLuas.textContent = "Masukkan nilai yang valid untuk alas dan tinggi!";
  }
}

function hitungKeliling() {
  var sisi1 = parseFloat(document.getElementById("sisi1").value);
  var sisi2 = parseFloat(document.getElementById("sisi2").value);
  var sisi3 = parseFloat(document.getElementById("sisi3").value);
  var hasilKeliling = document.getElementById("hasilKeliling");

  if (
    !isNaN(sisi1) &&
    !isNaN(sisi2) &&
    !isNaN(sisi3) &&
    sisi1 > 0 &&
    sisi2 > 0 &&
    sisi3 > 0
  ) {
    var keliling = sisi1 + sisi2 + sisi3;
    hasilKeliling.textContent =
      "Keliling Segitiga: " + keliling.toFixed(2) + " cm";
  } else {
    hasilKeliling.textContent =
      "Masukkan nilai yang valid untuk setiap sisi segitiga!";
  }
}
