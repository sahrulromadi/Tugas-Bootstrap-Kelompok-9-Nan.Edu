$(document).ready(function () {
  // untuk navbar
  // event listener scroll
  $(window).on("scroll", function () {
    const navbar = $(".navbar");
    // jika scroll lebih dari 5 pixel
    if ($(this).scrollTop() > 5) {
      navbar.css("opacity", "0.9"); // Ubah opacity
    } else {
      navbar.css("opacity", "1"); // Kembalikan opacity
    }
  });

  // untuk FAQ
  // ambil semua pertanyaan dengan class faq-item
  const boxQuestions = $(".faq-item");

  // handling agar di eksekusi jika ada element faq-item saja
  if (boxQuestions.length) {
    // gunakan loop karena memiliki class yang sama
    boxQuestions.each(function () {
      const q = $(this);
      const answer = q.find(".faq-answer");
      const icon = q.find(".faq-question i");

      // event listener ketika faq-item diklik
      q.on("click", function () {
        if (answer.css("display") === "none" || answer.css("display") === "") {
          answer.css("display", "block");
          // hapus icon yang ada
          icon.removeClass("bi-plus").addClass("bi-dash");
        } else {
          answer.css("display", "none");
          icon.removeClass("bi-dash").addClass("bi-plus");
        }
      });
    });
  }

  // untuk contact
  const contactForm = $("#contactForm");

  // handling agar hanya di eksekusi jika element ada
  if (contactForm.length) {
    contactForm.on("submit", function (event) {
      // mencegah form dikirim secara default
      event.preventDefault();

      // ambil elemen berdasarkan id
      const name = $("#name").val();
      const phone = $("#phone").val();
      const email = $("#email").val();
      const message = $("#message").val();

      // alert yang muncul
      alert(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
      );

      // di console log
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
      console.log("Message:", message);

      // reload page
      location.reload();
    });
  }

  // untuk login dan register
  // ambil class needs validation
  const form = $(".needs-validation");
  // validasi jika form ada, agar tidak error di page lain
  if (form.length) {
    form.on("submit", function (event) {
      // cek validasi apakah semua input dalam form valid sesuai aturan HTML
      if (!this.checkValidity()) {
        // mencegah tindakan default dari event listener submit
        event.preventDefault();
      }
      // class dari bootstrap untuk menampilkan elemen validasi
      $(this).addClass("was-validated");
    });
  }
});
