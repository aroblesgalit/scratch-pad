$(document).ready(function () {
  const mainDiv = $('main')

  mainDiv.on('touchstart', function () {
    console.log('start')
  })

  mainDiv.on('touchmove', function () {
    console.log('move')
  })

  mainDiv.on('touchend', function () {
    console.log('end')
  })
})
