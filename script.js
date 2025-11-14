// Form sederhana
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih! Pesan kamu sudah terkirim.");
  this.reset();
});
