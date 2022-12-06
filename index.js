function kirimData() {
    var nama = document.getElementById("nama").value;
    var role = document.getElementById("role").value;
    var availability = document.getElementById("availability").value;
    var usia = document.getElementById("usia").value + " Tahun";
    var lokasi = document.getElementById("lokasi").value;
    var years = document.getElementById("years").value + " Tahun";
    var email = document.getElementById("email").value;
    

    //Proses Mengeluarkan kembali ke HTML
    var namaOutput = document.getElementById("namaOutput");
    var roleOutput = document.getElementById("roleOutput");
    var availOutput = document.getElementById("availOutput");
    var usiaOutput = document.getElementById("usiaOutput");
    var lokasiOutput = document.getElementById("lokasiOutput");
    var yearsOutput = document.getElementById("yearsOutput");
    var emailOutput = document.getElementById("emailOutput");

    //Mengembalikan hasil input ke HTML
    namaOutput.innerText = nama;
    roleOutput.innerText = role;
    availOutput.innerText = availability;
    usiaOutput.innerText = usia;
    lokasiOutput.innerText = lokasi;
    yearsOutput.innerText = years;
    emailOutput.innerText = email;
}