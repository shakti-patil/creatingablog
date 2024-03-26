// script.js

document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form Validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      if (validateForm()) {
        // Simulate form submission (you can replace this with your actual form submission logic)
        setTimeout(function () {
          successMessage.style.display = 'block';
        }, 1000);
        setTimeout(function () {
          successMessage.style.display = 'none';
          form.reset();
        }, 5000);
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        isValid = false;
        setErrorFor(nameInput, 'Name cannot be blank');
      } else {
        setSuccessFor(nameInput);
      }
  
      if (emailInput.value.trim() === '') {
        isValid = false;
        setErrorFor(emailInput, 'Email cannot be blank');
      } else if (!isEmail(emailInput.value.trim())) {
        isValid = false;
        setErrorFor(emailInput, 'Email is not valid');
      } else {
        setSuccessFor(emailInput);
      }
  
      if (messageInput.value.trim() === '') {
        isValid = false;
        setErrorFor(messageInput, 'Message cannot be blank');
      } else {
        setSuccessFor(messageInput);
      }
  
      return isValid;
    }
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
    }
  
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }
  
    function isEmail(email) {
      // Regular expression for basic email validation
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }
  
    // Responsive Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('slide');
    });
  
    // Hide navigation when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('slide');
      });
    });
  
    // Scrolling Effect for Hero Section
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');
  
      heroSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });
  
  });