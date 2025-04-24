document.addEventListener('DOMContentLoaded', () => {
  const iconElement = document.querySelector('.icon');
  const myLinks = document.getElementById('myLinks');

  iconElement.addEventListener('click', () => {
    if (myLinks.style.display === '' || myLinks.style.display === 'none') {
      myLinks.style.display = 'block'; // Set to 'grid' when clicked
    } else {
      myLinks.style.display = 'none'; // Set to 'none' when clicked again
    }
  });
});
