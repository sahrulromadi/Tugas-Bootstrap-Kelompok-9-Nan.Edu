// untuk faq
// ambil semua pertanyaan dengan class faq-item
const boxQuestions = document.querySelectorAll(".faq-item");

// gunakan loop krn memiliki class yang sama
boxQuestions.forEach((q) => {
  // ambil answer dengan query selector
  // query selector -> ambil element pertama dari faq-item
  const answer = q.querySelector(".faq-answer");
  // ambil icon
  const icon = q.querySelector(".faq-question i");

  // event listener ketika faq-item diklik
  q.addEventListener("click", () => {
    if (answer.style.display === "none") {
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

// untuk contact
document.getElementById("contactForm").addEventListener("submit", () => {
  // ambil elemen berdasarkan id
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // alert yang muncul
  alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);

  // di console log
  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Message:", message);
});
