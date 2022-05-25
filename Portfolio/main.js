$(document).ready(function () {
  const mainDiv = $('main')

  function renderHome () {
    const html = `<img class="home" src="./images/hiking_bw.jpg" alt="Alvin Galit" />`
    $('main').html(html)
  }
  renderHome()

  function renderAbout () {
    const html = `
    <div class="wrapper">
      <p>I'm a Web Developer with a Bachelor of Fine Arts in Graphic Design from Cal Poly Pomona and a 
      Certificate of Completion of the Coding Bootcamp Certificate Program from the University of Texas 
      at Austin. My skills are HTML, CSS, JavaScript, MongoDB, Express, React, and Node.js. My strengths 
      are balancing design and functionality, collaboration, and time-management. During my time in the 
      coding bootcamp, I completed projects, such as a full-stack application for teachers to effortlessly 
      create and share multiple-choice and timed quizzes as well as for students to conveniently take them 
      on their mobile. I applied aspects of UX/UI and agile development while working in a team of five. 
      My enrollment in the bootcamp brought out a passion for coding as I was able to bring my designs to 
      life. I'm driven and motivated to continue growing and learning. <br><br>

      When I'm not coding, you can either find me drawing, exercising, hiking, or simply watching movies. 
      Oh and I can also be doing some graphic design freelance work on the side.</p>
    </div>
    `
    $('main').html(html)
  }

  $('.uk-nav > li').click(function (e) {
    e.preventDefault()
    const navItem = $(this).text()
    switch (navItem) {
      case 'about':
        console.log(navItem)
        renderAbout()
        break
      default:
        renderHome()
    }
  })
})
