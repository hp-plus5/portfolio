/**
 * Scroll to top button behavior
 */
const scrollUp = document.querySelector("#scroll-up")
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

/**
 * Selector helper function
 */
const select = (element, allInstances = false) => {
  element = element.trim()
  if (allInstances) {
    return [...document.querySelectorAll(element)]
  } else {
    return document.querySelector(element)
  }
}

/**
 * The typing effect ("I'm a ...")
 */
const typed = select('.typed')
if (typed) {
  let nouns = typed.getAttribute('data-typed-items')
  nouns = nouns.split(',')
  new Typed('.typed', {
    strings: nouns,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  })
}


/**
 * Skills animation (in progress)
 */
let skillsContent = select('.skills-content')
if (skillsContent) {
  new Waypoint({
    element: skillsContent,
    offset: '80%',
    handler: function(direction) {
      let progress = select('.progress .progress-bar', true)
      progress.forEach((element) => {
        element.style.width = element.getAttribute('aria-valuenow') + '%'
      })
    }
  })
}