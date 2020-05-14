
function createHeader () {
  const h2 = document.createElement('h2')
  h2.innerHTML = 'Javascript has been loaded'

  return h2
}

window.onload = () => {
  const root = document.getElementById('main-root')
  root.appendChild(createHeader())
};
