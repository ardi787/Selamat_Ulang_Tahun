const opening = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");

const wishBtn = document.getElementById("wishBtn");
const wishText = document.getElementById("wishText");

const flame = document.getElementById("flame");

const celebrateBtn = document.getElementById("celebrateBtn");


// =================================
// ENTER WEBSITE
// =================================

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        opening.classList.add("hide");
    });
}


// =================================
// MAKE A WISH
// =================================

if (wishBtn) {
    wishBtn.addEventListener("click", () => {

        if (flame) {
            flame.style.opacity = "0";
        }

        if (wishText) {
            wishText.innerHTML =
                "✨ Semoga harapan yang kamu simpan malam ini perlahan menjadi kenyataan. ✨";

            wishText.classList.add("show");
        }

        createParticles();
    });
}


// =================================
// MYSTERY GAME
// =================================

function checkMystery(answer) {

    const result = document.getElementById("mysteryResult");
    const secret = document.getElementById("secretUnlocked");

    if (answer === "b") {

        result.innerHTML = `
            ✦ <strong>Benar... kamu menemukan jawabannya.</strong><br>
            Ternyata kamu cukup jeli. 🌙
        `;

        secret.style.display = "block";

    } else {

        result.innerHTML = `
            ✦ Belum tepat... petunjuknya masih menyimpan rahasia.
        `;

        secret.style.display = "none";
    }
}


// =================================
// OPEN FINAL MESSAGE + JUMPSCARE
// =================================

function openFinalMessage() {

    const jumpscare = document.getElementById("jumpscare");
    const finalMessage = document.getElementById("finalMessage");

    // Efek partikel
    createParticles();

    // Tampilkan jumpscare
    if (jumpscare) {
        jumpscare.classList.add("active");
    }

    // Setelah 1,2 detik → tampilkan pesan akhir
    setTimeout(() => {

        if (jumpscare) {
            jumpscare.classList.remove("active");
        }

        if (finalMessage) {

            finalMessage.classList.add("show");

            finalMessage.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 1200);
}


// =================================
// CELEBRATE BUTTON
// =================================

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        openFinalMessage();

    });

}


// =================================
// PARTICLES
// =================================

function createParticles() {

    const emojis = [
        "🎃",
        "👻",
        "🦇",
        "🕸️",
        "✨",
        "🕯️",
        "🖤"
    ];

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        particle.style.position = "fixed";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top = "-50px";

        particle.style.fontSize =
            Math.random() * 20 + 15 + "px";

        particle.style.zIndex = "99999";

        particle.style.pointerEvents = "none";


        document.body.appendChild(particle);


        const duration =
            Math.random() * 3 + 2;


        particle.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh)
                         rotate(${Math.random() * 720}deg)`,

                    opacity: 0
                }
            ],

            {
                duration: duration * 1000,
                easing: "linear"
            }
        );


        setTimeout(() => {

            particle.remove();

        }, duration * 1000);

    }
}


// =================================
// THANK YOU BUTTON
// =================================

const thankBtn =
    document.getElementById("thankBtn");

if (thankBtn) {

    thankBtn.addEventListener("click", () => {

        alert(
            "🎃 Terima kasih sudah bertahan sampai akhir! 👻"
        );

    });

}