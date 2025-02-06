document.getElementById("openCard").addEventListener("click", function() {
    let card = document.querySelector(".card");
    card.classList.add("show");

    // Tambahkan animasi love berjatuhan setiap kali tombol ditekan
    for (let i = 0; i < 15; i++) {
        setTimeout(createFallingHeart, i * 200);
    }
});

// Fungsi untuk membuat animasi love berjatuhan
function createFallingHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Posisi random di layar
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 4 + 2) + "s"; // Kecepatan random
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Ukuran random

    document.body.appendChild(heart);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
