const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-button');
const sessionCards = document.querySelectorAll('.session-card');
const yearSpan = document.getElementById('year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen.toString());
  });

  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    sessionCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      card.style.display = shouldShow ? 'flex' : 'none';
    });
  });
});

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const subscribeForm = document.querySelector('.subscribe-form');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = subscribeForm.querySelector('input[type="email"]').value;

    subscribeForm.reset();
    const message = document.createElement('p');
    message.className = 'success-message';
    message.textContent = `Спасибо! Мы отправили письмо на ${email}.`;
    subscribeForm.after(message);

    setTimeout(() => message.remove(), 5000);
  });
}
