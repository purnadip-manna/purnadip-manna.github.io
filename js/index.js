$("#submitbtn").click(function () {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;
  let sub = document.getElementById("inputSubject").value;
  let msg = document.getElementById("inputMessage").value;
  $.ajax({
    type: "POST",
    url: "https://purnadip2702.pythonanywhere.com/submit",
    data: { name: name, email: email, subject: sub, message: msg },
    success: function (result) {
      $("#resText").html(result);
    },
  });
});

// Navbar scroll shadow
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
