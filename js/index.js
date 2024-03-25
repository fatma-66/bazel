

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var desire = document.getElementById('desire');
    
     
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'white';
      desire.src = 'images (2)/images/logo-dark.png';
      anchorElements.forEach(function(element) {
        element.style.color = 'black'; // Change to the new color
      });
    } else {
      navbar.style.backgroundColor = 'transparent'; // Change to your initial color
      desire.src = 'images (2)/images/logo-light.png';

     
    }
  });