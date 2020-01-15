const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
  'linear-gradient(to top right, #f12711, #f5af19)',
  'linear-gradient(to top right, #f12711, #f5af19)',
  'linear-gradient(to top right, #f12711, #f5af19)'
];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const id = entry.target.id;
    const activeAnchor = document.querySelector(`[data-page=${id}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (entry.isIntersecting) {
      bubble.style.visibility = 'visible';
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});

// modal //

const modal = document.getElementById("modal");
const submit = document.getElementsByClassName('submit')[0];
const span = document.getElementsByClassName("close")[0];

submit.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

