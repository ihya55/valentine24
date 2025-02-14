let noClickCount = 0;
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const questionContainer = document.getElementById("question-container");
const confirmationContainer = document.getElementById("confirmation-container");
const confirmationText = document.getElementById("confirmation-text");
const confirmYesButton = document.getElementById("confirm-yes-button");
const dashboardContainer = document.getElementById("dashboard-container");
const catImage = document.getElementById("cat-image");
const confirmationCat = document.getElementById("confirmation-cat");

const catImages = [
  "images/download2.gif",
  "images/download3.gif",
  "images/download4.gif",
  "images/download5.gif",
];

const confirmMessages = [
  "Beneran? 🤨",
  "Yakin? 🤔",
  "Ngga bohongkan? 😳",
  "I Love you 💕",
];

const confirmImages = [
  "images/love2.gif",
  "images/love3.gif",
  "images/love4.gif",
];

if (noButton) {
  noButton.addEventListener("click", () => {
    noClickCount++;
    yesButton.style.transform = `scale(${1 + noClickCount * 1})`;

    if (noClickCount < catImages.length) {
      catImage.src = catImages[noClickCount];
    }

    // Memindahkan tombol "Tidak" ke posisi acak dalam container
    const container = questionContainer.getBoundingClientRect();
    const maxX = container.width - noButton.clientWidth - 10;
    const maxY = container.height - noButton.clientHeight - 10;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    if (noClickCount >= 5) {
      noButton.style.display = "none";
    }
  });
}

if (yesButton) {
  yesButton.addEventListener("click", () => {
    questionContainer.style.display = "none";
    confirmationContainer.style.display = "block";
  });
}

let confirmCount = 0;

if (confirmYesButton) {
  confirmYesButton.addEventListener("click", () => {
    confirmCount++;
    if (confirmCount < confirmMessages.length) {
      confirmationText.textContent = confirmMessages[confirmCount];
      if (confirmCount > 0 && confirmCount <= confirmImages.length) {
        confirmationCat.src = confirmImages[confirmCount - 1];
      }
    } else {
      confirmationContainer.style.display = "none";
      dashboardContainer.style.display = "block";
    }
  });
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("home")) {
    showPage("home");
  }
});
