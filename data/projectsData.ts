interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'My daughter\'s feeding schedule',
    description: `a play on Joy Division's Unknown Pleasures album cover, 
    this project is a simple web app that helps me keep track of my daughter's 
    feeding schedule. Built with D3.  Special thanks: https://observablehq.com/@d3/ridgeline-plot`,
    imgSrc: '/static/images/known_feedings.png',
    href: 'https://lewis1286.github.io/jd_sierra_feeding/',
  },
  {
    title: 'My Personal Blog',
    description: `A good old wordpress blog that I've been running since 2011. I write about my thoughts, experiences, and things I've learned.`,
    imgSrc: '/static/images/diffusecreation_website.png',
    href: 'https://diffusecreation.com'
  }
]

export default projectsData
