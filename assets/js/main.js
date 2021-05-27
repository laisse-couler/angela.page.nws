document.addEventListener('DOMContentLoaded', (event) =>
{
  const button = document.querySelector('#bg');
  button.addEventListener('click', function() {

      document.body.style.background = "blue";

    });

})