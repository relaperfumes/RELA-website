// Replace this number with the RÉLA owner's WhatsApp number.
// Use country code without + or spaces, e.g. 919876543210
const WHATSAPP_NUMBER = "919344347754";

function order(product) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add the RÉLA WhatsApp number in script.js first.");
    return;
  }
  const message = `Hi RÉLA! I want to order ${product}. Please share the ordering details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function openCombo() {
  document.getElementById("comboModal").classList.add("active");
}

function closeCombo() {
  document.getElementById("comboModal").classList.remove("active");
}

function updateCombo() {
  const selected = document.querySelectorAll('.perfume-option input:checked');
  const count = selected.length;

  document.getElementById("selectedCount").textContent = count;

  const button = document.getElementById("comboWhatsapp");
  button.disabled = count !== 3;

  // Prevent selecting more than 3
  document.querySelectorAll('.perfume-option input').forEach(input => {
    if (!input.checked) {
      input.disabled = count >= 3;
    }
  });
}

function orderCombo() {
  const selected = [...document.querySelectorAll('.perfume-option input:checked')].map(input => input.value);

  if (selected.length !== 3) {
    alert("Please select exactly 3 perfumes.");
    return;
  }

  const message =
`Hello RÉLA 👋

I would like to order the RÉLA Signature Combo.

My selected perfumes are:
1. ${selected[0]}
2. ${selected[1]}
3. ${selected[2]}

Please confirm my combo order.`;

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
    elan: "RÉLA Elan — your fresh & modern match ✨",
    javadhu: "RÉLA Javadhu — your warm & earthy match ✨"
  };
  document.getElementById("result").textContent = names[mood];
}
