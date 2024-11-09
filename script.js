let currentIndex = 0;
    const cards = document.querySelectorAll(".card");
    const sliderContent = document.getElementById("sliderContent");
    const cardsPerPage = 4; // Number of cards visible per page
    const totalCards = cards.length;
    const maxIndex = Math.ceil(totalCards / cardsPerPage) - 1;

    

    function updateSlider() {
      const offset = currentIndex * (cards[0].offsetWidth + 15); // 15 is the gap between cards
      sliderContent.style.transform = `translateX(-${offset}px)`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === maxIndex;
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

    // Initialize slider
    updateSlider();