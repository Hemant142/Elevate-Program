window.onload = () => {
  const questionImg = document.getElementById("questionImg");
  const feedbackImg = document.getElementById("feedbackImg");
  const adContainer = document.getElementById("adContainer");

  // Step 1: Show first question
  setTimeout(() => {
    simulateClick("italy");
  }, 1500);

  // Step 2: Show correct for Italy
  setTimeout(() => {
    showFeedback(true);
  }, 2500);

  // Step 3: Move to next question
  setTimeout(() => {
    questionImg.src = "assets/hint_text2.png";
  }, 4000);

  // Step 4: Simulate France click
  setTimeout(() => {
    simulateClick("france");
  }, 5000);

  // Step 5: Show correct
  setTimeout(() => {
    showFeedback(true);
  }, 6000);

  // Step 6: Show video
  setTimeout(() => {
    adContainer.innerHTML = `
      <video autoplay muted id="finalVideo" width="300" height="600" style="object-fit:cover;">
        <source src="assets/ulajh.mp4" type="video/mp4" />
      </video>
      <button id="unmuteBtn">Unmute</button>
    `;
    document.getElementById("unmuteBtn").addEventListener("click", () => {
      const vid = document.getElementById("finalVideo");
      vid.muted = false;
      vid.play();
    });
  }, 8000);
};

function simulateClick(pinId) {
  const pin = document.getElementById(pinId + "Pin");
  pin.style.transform = "scale(1.4)";
  setTimeout(() => {
    pin.style.transform = "scale(1)";
  }, 400);
}

function showFeedback(correct) {
  const feedbackImg = document.getElementById("feedbackImg");
  feedbackImg.src = correct ? "assets/correct.png" : "assets/incorrect.png";
  feedbackImg.style.display = "block";
  setTimeout(() => {
    feedbackImg.style.display = "none";
  }, 1000);
}
