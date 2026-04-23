
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.style.opacity = '0';

    // Puff exit animation
    document.querySelectorAll('.puff').forEach(p => {
      p.style.transform = 'scale(2)';
      p.style.opacity = '0';
    });

    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);

  }, 2000);
});


let index = 0;
const slides = document.getElementById('slides');

if (slides) {
  const totalSlides = slides.children.length;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}


function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


let reviewIndex = 0;
const reviewTrack = document.getElementById('reviewTrack');

if (reviewTrack) {
  const totalReviews = reviewTrack.children.length;

  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % totalReviews;
    reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
  }, 3000);
}


const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }
  });
};

// Initial state
sections.forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(50px)';
  sec.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);


window.addEventListener('mousemove', (e) => {
  const clouds = document.querySelectorAll('.cloud');
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  clouds.forEach(cloud => {
    cloud.style.transform = `translate(${x}px, ${y}px)`;
  });
});