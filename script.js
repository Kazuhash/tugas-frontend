//expense tracker 5352501114
const inputNama = document.getElementById('nama');
const inputJumlah = document.getElementById('jumlah');
const tambah = document.getElementById('tambah');
const daftarPengeluaran = document.getElementById('daftar-pengeluaran');
const total = document.getElementById('total');
const jumlahTransaksiEl = document.getElementById('jumlah-transaksi');

let totalHarga = 0;
let jumlahTransaksi = 0;

function updateStatistik() {
    total.textContent = ` ${totalHarga.toLocaleString('id-ID')}`;
    jumlahTransaksiEl.textContent = `Jumlah Transaksi: ${jumlahTransaksi}`;
}
tambah.addEventListener('click', function() {
    const nama = inputNama.value.trim();
    const jumlah = parseFloat(inputJumlah.value);

    if(nama === '' || isNaN(jumlah) || jumlah <= 0) {
        alert('Nama dan jumlah harus diisi dengan benar.');
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
    <div>
        <span>${nama}</span>
        <strong>Rp ${jumlah.toLocaleString('id-ID')}</strong>
    </div>
    <button class="btn-hapus">Hapus</button>
    `;

    const btnHapus = li.querySelector('.btn-hapus');
    btnHapus.addEventListener('click', function() {
        totalHarga -= jumlah;
        jumlahTransaksi--;
        updateStatistik();
        li.remove();
    });

    daftarPengeluaran.appendChild(li);
    totalHarga += jumlah;
    jumlahTransaksi++;
    updateStatistik();

    inputNama.value = '';
    inputJumlah.value = '';
});