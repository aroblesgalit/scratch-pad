$(document).ready(function () {
  const mainDiv = $('main')

  function renderHome () {
    const html = `<img class="home" src="./images/hiking.jpg" alt="Alvin Galit" />`
    $('main').append(html)
  }
  renderHome()
})
