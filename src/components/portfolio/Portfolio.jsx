import React from 'react'
import './portfolio.css'
import calculator from '../../assets/calculator-image.png'

const data = [
  {
    id: 1,
    image: calculator,
    title: 'Calculator App',
    github: 'https://github.com/rita-lu/Calculator',
    demo: 'https://rita-lu.github.io/Calculator/'
  },
  // {
  //   id: 2,
  //   image: IMG1,
  //   title: 'project 1',
  //   github: 'https://github.com',
  //   demo: '#'
  // },
  // {
  //   id: 3,
  //   image: IMG1,
  //   title: 'project 1',
  //   github: 'https://github.com',
  //   demo: '#'
  // },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: 'project 1',
  //   github: 'https://github.com',
  //   demo: '#'
  // },
  // {
  //   id: 5,
  //   image: IMG1,
  //   title: 'project 1',
  //   github: 'https://github.com',
  //   demo: '#'
  // },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: 'project 1',
  //   github: 'https://github.com',
  //   demo: '#'
  // }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} class="btn" target="_blank">Github</a>
                  <a href={demo} class="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio