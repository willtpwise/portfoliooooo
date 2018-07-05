import itfe1 from './images/itfe-ft-1.jpg'
import itfe2 from './images/itfe-ft-2.jpg'
import itfe3 from './images/itfe-ft-3.jpg'

import hta1 from './images/hospitality-training-australia-ft-1.jpg'
import hta2 from './images/hospitality-training-australia-ft-2.jpg'

import computrain from './images/computrain.jpg'

import csta from './images/csta.jpg'

import logo from './images/logo.jpg'
export default {
  name: 'iTFE',
  tags: ['gpt', 'blog', 'group'],
  logo: logo,
  description: `
    Cucina De Luca is a family cafe, located in the heart of Carlingford, Sydney.
    I wrote the website for the business and guided them through the complexities of SEO and SEM.`,
  roles: [
    {
      title: 'Junior Front End Developer',
      from: 'September, 2013',
      to: 'February, 2015'
    },
    {
      title: 'Freelance Developer',
      from: 'February, 2015',
      to: 'September, 2015',
      description: '(Ink Marketing)'
    }
  ],
  projects: [
    {
      name: 'iTFE Website',
      desc: `
        I worked alongside a senior developer to manage and maintain the iTFE website.
        Together we produced a mobile responsive site which drove online course registration
        for the business.
      `,
      snaps: [
        {
          src: itfe1,
          caption: 'The home page'
        },
        {
          src: itfe2,
          caption: 'The booking page'
        },
        {
          src: itfe3,
          caption: 'The course page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'https://www.itfe.edu.au/'
        }
      ]
    },
    {
      name: 'Hosptitality Training Australia Website',
      desc: `
        Hospitality Training Australia (HTA) is a division if iTFE which provided tertiary courses for the hospitality industry.
        Together, myself and a senior developer worked on the HTA website and established
        their online registration systems along with course information and marketing.
      `,
      snaps: [
        {
          src: hta1,
          caption: 'The home page'
        },
        {
          src: hta2,
          caption: 'The booking page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://www.hosptrain.vic.edu.au/'
        }
      ]
    },
    {
      name: 'Children Services Training Australia Website',
      desc: `
        Children Services Training Australia was one of iTFE's newest brands when I had
        the opportunity to build their website. I worked closely alongside a senior
        developer to produce the site on a drupal CMS framework.
      `,
      snaps: [
        {
          src: csta,
          caption: 'The CSTA home page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://www.csta.edu.au/'
        }
      ]
    },
    {
      name: 'Computer Training Australia Website',
      desc: `
        Computer Training Australia (CTA) offers computer courses across Australia under the iTFE banner.
        I worked on the CTA website alongside a senior developer to manage the sites
        online registration systems along with course information and marketing.
      `,
      snaps: [
        {
          src: computrain,
          caption: 'The home page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://www.computrain.edu.au/'
        }
      ]
    }
  ]
}
