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
    e.preventDefault();

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

    if (messageInput.value.trim() === '') {
      isValid = false;
      alert('Please enter a message.');
    }

    if (isValid) {
      alert('Form submitted successfully!');
    }
  });

  document.querySelectorAll('.fab').forEach(icon => {
    icon.addEventListener('mouseover', function () {
      alert(`You hovered over ${this.classList[1]} icon.`);
    });
  });

  window.addEventListener('scroll', function () {
    const body = document.body;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      body.style.backgroundColor = '#333333';
    } else {
      body.style.backgroundColor = '#222222';
    }
  });

  alert('Welcome to TuqaAburaddaha\'s website!');

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', function () {
    this.innerText = 'Thanks for clicking!';
  });

  const loadContentBtn = document.getElementById('load-content');
  const contentContainer = document.getElementById('dynamic-content');

  loadContentBtn.addEventListener('click', function () {
    const newContent = document.createElement('p');
    newContent.textContent = 'Dynamically loaded content!';
    contentContainer.appendChild(newContent);
  });

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(`Mouse position - X: ${mouseX}, Y: ${mouseY}`);
  });

  const toggleElement = document.getElementById('toggle-me');
  toggleElement.addEventListener('dblclick', function () {
    this.classList.toggle('highlight');
  });

  const audioElement = new Audio('path-to-your-audio-file.mp3');
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      audioElement.play();
    }
  });

  const changeColorBtn = document.getElementById('change-color');
  changeColorBtn.addEventListener('click', function () {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    document.body.style.color = randomColor;
  });

  window.myFunction = function () {
    navigation.classList.toggle('show');
  };
});
