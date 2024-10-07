// untuk faq

// ambil semua pertanyaan dengan class faq-item
const boxQuestions = document.querySelectorAll(".faq-item");

boxQuestions.forEach((q) => {
  // ambil answer dengan query selector
  // query selector -> ambil element pertama dari faq-item
  const answer = q.querySelector(".faq-answer");
  // ambil icon
  const icon = q.querySelector(".faq-question i");

  // event listener ketika faq-question diklik
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
