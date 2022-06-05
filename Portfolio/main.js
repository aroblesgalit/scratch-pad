$(document).ready(function () {
  const mainDiv = $('main')

  function renderHome () {
    const html = `<img class="home" src="./images/hiking_bw.jpg" alt="Alvin Galit" />`
    $('main').html(html)
  }
  renderHome()

  function renderAbout () {
    const html = `
    <div class="about wrapper">
      <img src="https://via.placeholder.com/960x640">
      <p>I'm a Frontend Web Developer from SoCal (Southern California), 
      but I didn't start off as a web developer. My first role right out 
      of college was a Graphic Designer with
      focus on print and User Interface designs. I was 2-3 years deep when
      I picked up an interest in the coding world. I realized, not only
      did I enjoy designing UIs, but I also had a lot of fun with the
      development process and building all the moving blocks to create
      something functional. So at the beginning of the pandemic in 2020, I
      decided to switch career and completed a coding bootcamp from the
      University of Texas at Austin. I knew I made the right choice when
      problem solving just clicks.</p>
      <p>When I'm not coding, I enjoy drawing, working out, going on hikes,
      or simply watching movies and eating sweets, lots of it.</p>
    </div>
    `
    $('main').html(html)
  }

  function renderCode () {
    const projects = [
      {
        name: 'ChampUnite',
        description:
          'A full-stack MERN game app where users go on a one-on-one card battle.',
        image:
          'https://www.alvingalit.com/static/media/champUnite.89686fab.png',
        github: 'https://github.com/aroblesgalit/champ-unite',
        live: 'https://champ-unite-v01.herokuapp.com/'
      },
      {
        name: 'Artist Web App',
        description:
          'A web app for an artist to show off his/her work as well as sell art.',
        image:
          'https://www.alvingalit.com/static/media/artistWebApp.ce5141e4.jpg',
        github: 'https://github.com/aroblesgalit/artist-web-app',
        live: 'https://artist-web-app.herokuapp.com/'
      },
      {
        name: 'Digital Class',
        description:
          'A full-stack MERN app allowing teachers to quickly and easily create and assign quizzes.',
        image:
          'https://www.alvingalit.com/static/media/digitalClass.50b4c601.png',
        github: 'https://github.com/aroblesgalit/digital-class',
        live: 'https://digital-class-production.herokuapp.com/'
      }
    ]
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
