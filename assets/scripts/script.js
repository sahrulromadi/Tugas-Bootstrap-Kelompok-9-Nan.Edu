// untuk navbar
// event listener scroll
document.addEventListener("scroll", () => {
  // kelas navbar
  const navbar = document.querySelector(".navbar");

  // jika scroll lebih dari 5 pixel
  if (window.scrollY > 5) {
    navbar.style.opacity = "0.9"; // Ubah opacity
  } else {
    navbar.style.opacity = "1"; // Kembalikan opacity
  }
});

// untuk FAQ
// ambil semua pertanyaan dengan class faq-item
const boxQuestions = document.querySelectorAll(".faq-item");

// handling agar di eksekusi jika ada element faq-item saja
if (boxQuestions) {
  // gunakan loop karena memiliki class yang sama
  boxQuestions.forEach((q) => {
    // ambil answer dengan query selector
    const answer = q.querySelector(".faq-answer");
    // ambil icon
    const icon = q.querySelector(".faq-question i");

    // event listener ketika faq-item diklik
    q.addEventListener("click", () => {
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        // hapus icon yang ada
        icon.classList.remove("bi-plus");
        // tambahkan icon baru
        icon.classList.add("bi-dash");
      } else {
        answer.style.display = "none";
        icon.classList.remove("bi-dash");
        icon.classList.add("bi-plus");
      }
    });
  });
}

// untuk contact
const contactForm = document.getElementById("contactForm");

// handling agar hanya di eksekusi jika element ada
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    // mencegah form dikirim secara default
    event.preventDefault();

    // ambil elemen berdasarkan id
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // alert yang muncul
    alert(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    );

    // di console log
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
  });
}

// untuk login dan register
// ambil class needs validation
const form = document.querySelector(".needs-validation");
// validasi jika form ada, agar tidak error di page lain
if (form) {
  form.addEventListener(
    "submit",
    function (event) {
      // cek validasi apakah semua input dalam form valid sesuai aturan HTML
      if (!form.checkValidity()) {
        // mencegah tindakan default dari event listener submit
        event.preventDefault();
      }
      // class dari bootstrap untuk menampilkan elemen validasi
      form.classList.add("was-validated");
    },
    false
  );
}
