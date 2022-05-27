$(document).ready(function () {
  const mainDiv = $('main')
  let isDown = false

  mainDiv.on('mousedown touchstart', function (e) {
    e.preventDefault()
    isDown = true
    console.log('start')
  })

  mainDiv.on('mousemove touchmove', function (e) {
    e.preventDefault()
    if (isDown) {
      console.log('move')
    }
  })

  mainDiv.on('mouseup touchend', function (e) {
    e.preventDefault()
    isDown = false
    console.log('end')
  })
})
