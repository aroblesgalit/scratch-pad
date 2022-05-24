$(document).ready(function () {
  const mainDiv = $('main')

  function renderHome () {
    const html = `<img src="https://via.placeholder.com/575x700" alt="Alvin Galit" />`
    $('main').append(html)
  }
  renderHome()
})
