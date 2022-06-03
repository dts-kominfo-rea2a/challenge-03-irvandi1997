// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (belanjaan) => {
  let belanjaanKuantitas = [];
  for (let i = 0; i < belanjaan.length; i++) {
    belanjaanKuantitas[i] = `- ${belanjaan[i].nama} x ${belanjaan[i].kuantitas}`;
  }
  return belanjaanKuantitas;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (belanjaan) => {
  let total = 0;
  for (let i = 0; i < belanjaan.length; i++) {
    let hargaKuantitas = [];
    hargaKuantitas[i] = belanjaan[i].harga * belanjaan[i].kuantitas;
    total += hargaKuantitas[i];
  }
  return total;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
