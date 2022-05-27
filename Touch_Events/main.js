$(document).ready(function () {
  const mainDiv = $('main')

  mainDiv.on('mousedown touchstart', function (e) {
    e.preventDefault()
    console.log('start')
  })

  mainDiv.on('mousemove touchmove', function (e) {
    e.preventDefault()
    console.log('move')
  })

  mainDiv.on('mouseup touchend', function (e) {
    e.preventDefault()
    console.log('end')
  })
})
