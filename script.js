onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.addEventListener("load", () => {

  // Remove animation pause
  document.body.classList.remove("not-loaded");
  console.log("Class 'not-loaded' removed from body.");

  // Popup wrap after 4 seconds
  setTimeout(() => {
    document.querySelector(".wrap-image").classList.add("show");
  }, 1000);

});

const envelopeContainer = document.querySelector('.envelope-container');
const flowers = document.querySelector('flower.html');

envelopeContainer.addEventListener('click', () => {
  envelopeContainer.classList.add('open'); // Show the letter

  // Delay redirection to flower.html
  setTimeout(() => {
    window.location.href = 'flower.html';
  }, 3000); // 3-second delay
});
