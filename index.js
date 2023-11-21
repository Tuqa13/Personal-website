document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.icon');
  const navigation = document.querySelector('.navigation ul');

  navToggle.addEventListener('click', function () {
    navigation.classList.toggle('show');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navigation.clientHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  const form = document.querySelector('form');
  const nameInput = document.getElementById('fname');
  const emailInput = document.getElementById('femail');
  const subjectInput = document.getElementById('fsubject');
  const messageInput = document.getElementById('fmessage');

  form.addEventListener('submit', function (e) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      alert('Please enter your name.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      alert('Please enter a valid email address.');
    }

    if (subjectInput.value.trim() === '') {
      isValid = false;
      alert('Please enter a subject.');
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
      isValid = false;
      alert('Please enter a message.');
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
