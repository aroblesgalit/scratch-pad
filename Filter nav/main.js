$(document).ready(function () {
  // Grab all filter items
  const filters = $('.thc-home-filter > li')
  // For each filter item
  filters.each(function () {
    // listen to a click event
    $(this).click(function () {
      // then remove the class 'active' from all of them
      filters.removeClass('active')
      // and add it to the one that was clicked
      $(this).addClass('active')
      // Grab all the products
      const products = $('.thc-home-products > li')
      // Get the text of the filter that was clicked
      const filter = $(this).text()
      // If 'all' was clicked, then show all products
      if (filter === 'all') {
        products.show()
        // else, hide all products, then show all with the class name that matches the filter text
      } else {
        products.hide()
        $(`.${filter}`).show()
      }
    })
  })
})
