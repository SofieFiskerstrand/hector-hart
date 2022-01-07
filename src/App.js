import './App.css';

function App() {
  // this is the data holding what page we're on
  let pageNumber = 0

  // content for these pages
  const pages = [
    { copy: 'looking for a fellow walker in London', background: '#edc7a9', circle: '#3e78ed' },
    { copy: "Kanye West's biggest fan", background: '#a1fffe', circle: '#e34a47' },
    { copy: 'excited for his future as a daddy', background: '#d3c7f3', circle: '#f7fe00' },
    { copy: `loves waterplay`, background: '#faffb8', circle: '#b472e6' },
  ]

  // pick the relevant tags
  const nextTag = document.querySelector('footer p.next')
  const previousTag = document.querySelector('footer p.prev')
  const randomTag = document.querySelector('footer p.random')
  const outputTag = document.querySelector('h2')
  const circleTag = document.querySelector('section div.circle')
  const bodyTag = document.querySelector('body')

  // make a next function to increase the pageNumber
  const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
      pageNumber = 0
    }

    updateSection()
  }

  // make a previous function to decrease the pageNumber
  const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
      pageNumber = pages.length - 1
    }

    updateSection()
  }

  // make a random function to show a random page
  const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateSection()
  }

  // this will update the sections content and style
  const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
  }

  // we click on nextTag, run this
  nextTag.addEventListener('click', function () {
    next()
  })

  // we click on previousTag, run this
  previousTag.addEventListener('click', function () {
    previous()
  })

  // on click of random tag, run this
  randomTag.addEventListener('click', function () {
    random()
  })

  // when a user press on a key, check for arrow left or right
  // and do next or prev correctly
  document.addEventListener('keyup', function (event) {
    console.log(event)

    // if key being pressed is 'ArrowRight'
    if (event.key === 'ArrowRight') {
      next()
    }

    // if key being pressed is 'ArrowLeft'
    if (event.key === 'ArrowLeft') {
      previous()
    }
  })
}

export default App;
