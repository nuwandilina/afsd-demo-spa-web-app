const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const contactPage = document.getElementById('contact-page');

homeLink.addEventListener('click', () => {
  homePage.style.display = 'block';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'block';
  contactPage.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'block';
});
