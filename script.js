// لینک‌های فعال هنگام اسکرول
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (pageYOffset >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

// دکمه بازگشت به بالا
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.style.cssText = `
  position:fixed;
  bottom:20px;
  right:20px;
  display:none;
  background:#00d1ff;
  border:none;
  padding:10px 15px;
  cursor:pointer;
  border-radius:5px;
`;
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
