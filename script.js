// Replace this number with the RÉLA owner's WhatsApp number.
// Use country code without + or spaces, e.g. 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

function order(product) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add the RÉLA WhatsApp number in script.js first.");
    return;
  }
  const message = `Hi RÉLA! I want to order ${product}. Please share the ordering details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function findPerfume() {
  const mood = document.getElementById("mood").value;
  const names = {
    vanilla: "RÉLA Vanilla — your soft & sweet match ✨",
    golden: "RÉLA Golden Dusk — your warm & luxurious match ✨",
    musk: "RÉLA Musk — your bold & confident match ✨",
    liora: "RÉLA Liora — your elegant & smooth match ✨",
    rose: "RÉLA Rose — your romantic & floral match ✨",
    jean: "RÉLA Jean — your fresh & modern match ✨"
  };
  document.getElementById("result").textContent = names[mood];
}
