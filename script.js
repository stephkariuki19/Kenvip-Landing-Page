var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter =1
  }
}, 8000);

// Add an event listener to the "Back to the top" link
document.querySelector('.top').addEventListener('click', () => {
  // Scroll back to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




