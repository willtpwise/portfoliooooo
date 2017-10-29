import lp1 from './images/lp-1.jpg'
import lp2 from './images/lp-2.jpg'
import lp3 from './images/lp-3.jpg'
import lp4 from './images/lp-4.jpg'
import pricing from './images/pricing.jpg'
import home from './images/home.jpg'
import logo from './images/logo.svg'
export default {
  name: 'Little Hotelier',
  tags: ['current'],
  logo: logo,
  description: `I've been working with Little Hotelier since 2016 as part of my role with SiteMinder, their parent company. <br>Together, my team and I manage all of the brand's public facing digital assets.`,
  roles: [
    {
      title: 'Front End Developer',
      from: 'August, 2016',
      to: 'February, 2017',
      desc: 'Employed by SiteMinder'
    },
    {
      title: 'Lead Web Developer',
      from: 'February, 2017',
      to: 'Present',
      desc: 'Employed by SiteMinder'
    }
  ],
  projects: [
    {
      name: 'LittleHotelier.com Website',
      desc: `
        As the lead developer working on the Little Hotelier website my role is
        to oversee the brand's digital assets from conception to production. <br><br>
        I work closely with teams in Marketing, Design and Product.
      `,
      snaps: [
        {
          src: home,
          caption: 'The LittleHotelier.com home page'
        },
        {
          src: pricing,
          caption: 'Product pricing page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'https://www.littlehotelier.com/'
        }
      ]
    },
    {
      name: 'Landing Pages',
      desc: `
        My team were responsible for a large collection of landing pages and
        other digital marketing assets.
      `,
      snaps: [
        {
          src: lp1,
          caption: 'A generic LittleHotelier landing page'
        },
        {
          src: lp2,
          caption: 'A generic LittleHotelier landing page'
        },
        {
          src: lp3,
          caption: 'A generic LittleHotelier landing page'
        },
        {
          src: lp4,
          caption: 'A generic LittleHotelier landing page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://lh.littlehotelier.com/lh-free-trial-stripe'
        }
      ]
    }
  ]
}
