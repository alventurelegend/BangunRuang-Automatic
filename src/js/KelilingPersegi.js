function KelilingPersegi(sisi) {
  const Keliling = 4 * sisi;
  return Keliling;
}

function HitungPersegi() {
  let sisi = document.getElementById("PanjangSisi").value;
  let keliling = document.getElementById("KelilingPersegi").value;

  //VALIDASI AGAR INPUTAN BERUPA NUMBER
  sisi = Number(sisi);
  keliling = Number(keliling);

  if (sisi > 0) {
    let hasil = KelilingPersegi(sisi);
    //TAMPILKAN HASIL KE HALAMAN WEB
    document.getElementById(
      "hasilPersegi"
    ).textContent = `Keliling persegi dengan panjang sisi ${sisi} cm adalah ${hasil.toFixed(
      0
    )} cm`;
  } else if (keliling > 0) {
    sisi = keliling / 4;
    let hasil = sisi;
    //TAMPILKAN HASIL KE HALAMAN WEB
    document.getElementById(
      "hasilPersegi"
    ).textContent = `Sisi persegi dengan keliling ${keliling} cm adalah ${hasil.toFixed(
      0
    )} cm`;     
  } else {
    document.getElementById("hasil").textContent =
      "Masukan panjang sisi atau keliling yang valid!";
  }
}
