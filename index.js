const mouseCircle = document.getElementById("mouse-circle");
// console.log(mouseCircle);
const handleMouseMove = (e) => {
  // console.log(e);
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  mouseCircle.style.left = `${mouseX}px`;
  mouseCircle.style.top = `${mouseY + window.scrollY}px`;
  mouseCircle.classList.remove("hidden");
};
const contactButtons = document.querySelectorAll("a");
contactButtons.forEach((contactButton) =>
  contactButton.addEventListener("click", (e) => {
    const section = document.getElementById(e.target.dataset.target);
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "end" });
  })
);
// handleMouseMove();
document.addEventListener("mousemove", handleMouseMove);
