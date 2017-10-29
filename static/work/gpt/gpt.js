import home from './images/home.jpg'
import web1 from './images/web-1.jpg'
import web2 from './images/web-2.jpg'
import web3 from './images/web-3.jpg'

import mf1 from './images/mf-1.jpg'
import mf2 from './images/mf-2.jpg'
import mf3 from './images/mf-3.jpg'

import logo from './images/logo.png'
export default {
  name: 'The GPT Group',
  tags: ['gpt', 'blog', 'group'],
  logo: logo,
  description: `The GPT Group is one of Australias largest property investment organisations, with over $14 billion in retail, office and logistical assets.`,
  roles: [
    {
      title: 'Front End Developer',
      from: 'September, 2015',
      to: 'June, 2016'
    }
  ],
  projects: [
    {
      name: 'The GPT Blog website',
      desc: `
        As part of my role with The GPT Group I supported the maintenance and redevelopment of their Blog Site. I worked closely with a team made up of a copywriter, a developer and a designer. Collectively we reinvented the company's dated blog site (built on Kentico 7) and brought it forward with an SEO friendly, mobile responsive design built on a Wordpress foundation.
      `,
      snaps: [
        {
          src: home,
          caption: 'The GPT Blog home page'
        },
        {
          src: web1,
          caption: 'The signup page for the blog'
        },
        {
          src: web2,
          caption: 'A listing page for the blog'
        },
        {
          src: web3,
          caption: 'An article page for the blog'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://blog.gpt.com.au/'
        }
      ]
    },
    {
      name: 'Hoyts & Reading Cinemas Movie Feed',
      desc: `
        As part of my role with The GPT Group, I developed a Movie Feed API which
        aggregated data from major cinema outlets, such as Hoyts & Reading Cinemas
        and displayed it on retail websites. <br><br>The API was deployed to
        some of Australias most wellknown shopping centres, including the iconic
        Melbourne Central.
      `,
      snaps: [
        {
          src: mf1,
          caption: 'The Movie Feed on desktop'
        },
        {
          src: mf2,
          caption: 'The movie feed pre-purchase'
        },
        {
          src: mf3,
          caption: 'The Movie Feed on mobile'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://www.melbournecentral.com.au/movie-times/movie-feed/'
        }
      ]
    }
  ]
}
