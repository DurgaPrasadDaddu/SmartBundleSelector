const bundles = document.querySelectorAll('.bundle-container');
const totalPrice = document.getElementById('total-price');

bundles.forEach((bundle, index) => {
  bundle.addEventListener('click', (e) => {
    // Ignore clicks on <select> elements
    if (e.target.tagName.toLowerCase() === 'select') return;

    const radio = bundle.querySelector('.radio-btn');
    radio.checked = true;

    // Toggle active state and update price
    bundles.forEach((b, i) => {
      b.classList.toggle('active', i === index);
    });

    const price = bundle.getAttribute('data-price');
    totalPrice.textContent = `$${parseFloat(price).toFixed(2)} USD`;
  });
});
