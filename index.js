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
const contactButton = document.getElementById("contact-button");
const contactSection = document.getElementById("contact");
contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth", block: "end" });
});
// handleMouseMove();
document.addEventListener("mousemove", handleMouseMove);
