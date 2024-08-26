// Grab elements

const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that the ${selector} exists/is typed correctly.`);
};

//Nav styles on scroll

const scrollHeader = () => {
  const navbarElement = selectElement('#header');
  if (this.scrollY >= 15) {
    navbarElement.classList.add('activated');
  } else {
    navbarElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up

const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup

formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => {
  searchContainer.classList.remove('activated');
});

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', (event) => {
  if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage

const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check theme in local storage, add light theme
if (currentTheme) {
  body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
  // Add light theme on click
  body.classList.toggle('light-theme');


  // If the body has class of light theme,add to local storage.
  // If not, remove it
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
  } else {
   localStorage.removeItem('currentTheme'); 
  }
});


// Swiper

const swiper = new Swiper(".swiper", {
  // OPTIONAL PARAMETER TO MAKE THE SLIDES LOOP
  loop: true,
  // HOW MANY SLIDES TO SHOW
  slidesPerView: 1,
  // HOW MUCH SPACE BETWEEN SLIDES
  spaceBetween: 20,
  // MAKE THE NEXT AND PREVIOUS BUTTONS WORK
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // MAKE PAGINATION INDICATORS WORK
  pagination: {
    el: '.swiper-pagination'
  },
  // RESPONSIVE BREAKPOINTS, FEWER SLIDES ON SMALL SCREEN
  breakpoints: {
    // 700 SHOWS 2 SLIDES
    700: {
      slidesPerView: 2
    },
    // 1200 AND UP, 3 SLIDES
    1200: {
      slidesPerView: 3
    }
  }
});