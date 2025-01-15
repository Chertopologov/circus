document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.page-header');
  const video = document.querySelector('.bg-video');
  const mainContent = document.querySelector('.main-content');

  if (!header || !video || !mainContent) return;


  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    if (scrollY > header.offsetHeight) {
      header.classList.add('scrolled');
      video.style.filter = 'blur(0px)';
    } else {
      header.classList.remove('scrolled');
      video.style.filter = 'blur(5px)';
    }
  });
});