const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navGlpy'
})

const scrollHead = document.querySelector('#contScroll')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 50){
    scrollHead.classList.add('navbar-scrolled');
  } else if (window.scrollY < 50){
    scrollHead.classList.remove('navbar-scrolled');
  }
})

const scrollReturn = document.querySelector("#btnReturn")
window.addEventListener('scroll', () => {
  if (window.scrollY >=200){
    scrollReturn.classList.add('opacity-100');
  } else if (window.scrollY < 200){
    scrollReturn.classList.remove('opacity-100');
  }
})