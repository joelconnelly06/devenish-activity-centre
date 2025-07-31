// Filter activity cards by category
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const cards = document.querySelectorAll('.activity-card');

    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      }
    });
  });
});