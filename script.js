let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderContent = document.getElementById("sliderContent");
const totalCards = cards.length;

function moveSlider(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalCards - 1;
  if (currentIndex >= totalCards) currentIndex = 0;
  updateSlider();
}

function updateSlider() {
  sliderContent.style.transform = `translateX(-${
    currentIndex * (cards[0].offsetWidth + 15)
  }px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalCards - 1;
}

function openPopover(name, position, company, bio, imageUrl) {
  document.getElementById("popoverName").innerText = name;
  document.getElementById("popoverPosition").innerText = position;
  document.getElementById("popoverCompany").innerText = company;
  document.getElementById("popoverBio").innerText = bio;
  document.getElementById("popoverImage").src = imageUrl;
  document.getElementById("popover").style.display = "flex";
}

function closePopover() {
  document.getElementById("popover").style.display = "none";
}
