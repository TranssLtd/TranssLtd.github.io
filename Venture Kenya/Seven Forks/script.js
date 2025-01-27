// JavaScript to handle toggle effect
document.querySelectorAll('.toggle-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });
  