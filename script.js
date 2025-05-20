const allowedAddress = "0xA6acbb8E00c2c7402271BD319a80B144A439E0E8".toLowerCase();

function verifyAddress() {
  const userAddress = document.getElementById("walletAddress").value.trim().toLowerCase();
  const errorMessage = document.getElementById("error-message");
  const accessCard = document.getElementById("access-card");
  const exclusiveContent = document.getElementById("exclusive-content");

  if (userAddress === allowedAddress) {
    accessCard.style.display = "none";
    exclusiveContent.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Access denied. Please buy Thato Maelane's NFT.";
  }
}
