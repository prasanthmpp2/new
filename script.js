// Replace these with your actual Google Form URLs
const REGISTRATION_LINKS = {
  day1: "YOUR_GOOGLE_FORM_LINK_FOR_DAY1",
  day2: "YOUR_GOOGLE_FORM_LINK_FOR_DAY2",
  day3: "YOUR_GOOGLE_FORM_LINK_FOR_DAY3"
};

function openRegistration(dayKey) {
  const url = REGISTRATION_LINKS[dayKey];
  if (!url || !/^https?:\/\//i.test(url)) {
    alert("Registration link will be updated soon. Please check back later.");
    return;
  }
  window.open(url, "_blank");
}

// Lightweight tilt effect for cards
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    const angleX = ((e.clientY - cardY) / rect.height) * -6;
    const angleY = ((e.clientX - cardX) / rect.width) * 6;
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-4px)`;
  });
});

document.addEventListener("mouseleave", () => {
  const cards = document.querySelectorAll("[data-tilt]");
  cards.forEach((card) => {
    card.style.transform = "";
  });
});
