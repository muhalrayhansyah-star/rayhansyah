// ===============================
// LOADING
// ===============================

window.onload = function () {
    document.body.style.opacity = "1";
};

// ===============================
// NAVBAR SAAT SCROLL
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.8)";
        header.style.boxShadow = "0 0 20px #00eaff";

    } else {

        header.style.background = "rgba(0,0,0,0.35)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// EFEK BINTANG BERKELIP
// ===============================

setInterval(() => {

    const stars = document.getElementById("stars");

    const random = Math.random() * 0.5 + 0.5;

    stars.style.opacity