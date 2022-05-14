$(document).ready(function () {
  const filters = $('.thc-home-filter > li')
  filters.each(function () {
    $(this).click(function () {
      filters.removeClass('active')
      $(this).addClass('active')
    })
  })
})
