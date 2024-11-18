let sepet = [];
let toplam = 0;

function sepeteEkle(urun, fiyat) {
    sepet.push({ urun, fiyat });
    toplam += fiyat;
    document.getElementById('sepet-sayisi').textContent = sepet.length;
    sepetGuncelle();
}

function sepetGuncelle() {
    const sepetUrunler = document.getElementById('sepet-urunler');
    sepetUrunler.innerHTML = '';
    
    sepet.forEach((item, index) => {
        const urunDiv = document.createElement('div');
        urunDiv.innerHTML = `
            ${item.urun} - ${item.fiyat} TL
            <button onclick="urunSil(${index})">Sil</button>
        `;
        sepetUrunler.appendChild(urunDiv);
    });

    document.getElementById('toplam-fiyat').textContent = `Toplam: ${toplam} TL`;
}

function urunSil(index) {
    toplam -= sepet[index].fiyat;
    sepet.splice(index, 1);
    document.getElementById('sepet-sayisi').textContent = sepet.length;
    sepetGuncelle();
}

function sepetiBosalt() {
    sepet = [];
    toplam = 0;
    document.getElementById('sepet-sayisi').textContent = 0;
    sepetGuncelle();
}

function siparisiTamamla() {
    if (sepet.length > 0) {
        alert('Siparişiniz alındı! Teşekkür ederiz.');
        sepetiBosalt();
    } else {
        alert('Sepetiniz boş!');
    }
}

document.querySelector('.sepet').addEventListener('click', () => {
    document.getElementById('sepet-modal').style.display = 'block';
});

window.onclick = function(event) {
    const modal = document.getElementById('sepet-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
