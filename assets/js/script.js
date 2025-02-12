function myFunction() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

document.addEventListener('scroll', function() {
  const topnav = document.querySelector('.topnav');
  const nav = document.getElementById("myTopnav");
  if (window.scrollY > 5) {
    topnav.classList.add('transparent');
  } else {
    topnav.classList.remove('transparent');
  }
});