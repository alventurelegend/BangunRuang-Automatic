function KelilingLingkaran(r) {
  const phi = Math.PI; //INI MEMBERIKAN HASIL PHI YANG BENAR DAN AKURAT
  return 2 * phi * r; //RUMUS KELILING LINGKARAN
}

function HitungLingkaran() {
  let r = document.getElementById("JariJari").value;
  let d = document.getElementById("Diameter").value;

  r = Number(r);
  d = Number(d);

  if (r > 0) {
    let hasil = KelilingLingkaran(r);
    //TAMPILKAN HASIL KE HALAMAN WEB
    document.getElementById(
      "hasilLingkaran"
    ).textContent = `Keliling lingkaran dengan jari-jari ${r} cm adalah ${hasil.toFixed(
      0
    )} cm`;
  } else if (d > 0) {
    r = d / 2;
    let hasil = r;
    //TAMPILKAN HASIL KE HALAMAN WEB
    document.getElementById(
      "hasilLingkaran"
    ).textContent = `Jari-jari lingkaran dengan diameter ${d} cm adalah ${hasil.toFixed(
      0
    )} cm`;
  } else {
   document.getElementById("hasilLingkaran").textContent =
      "Masukan jari-jari atau diameter yang valid!";
  }
}
