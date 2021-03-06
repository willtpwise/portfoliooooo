import lp1 from './images/lp-1.jpg'
import lp2 from './images/lp-2.jpg'
import lp3 from './images/lp-3.jpg'
import pricing from './images/pricing.jpg'
import techspace from './images/techspace.jpg'
import customerSuccess from './images/customer-success.jpg'
import welcome from './images/welcome.jpg'
import home from './images/home.jpg'
import ebook from './images/ebook.jpg'
import quote from './images/quote.jpg'
import logo from './images/logo.svg'
export default {
  name: 'SiteMinder',
  tags: ['current'],
  logo: logo,
  description: `I've been working with SiteMinder since 2016 as a Front End Engineer, and more recently as a Lead Web Developer managing a team of three.`,
  roles: [
    {
      title: 'Front End Developer',
      from: 'August, 2016',
      to: 'March, 2017'
    },
    {
      title: 'Lead Web Developer',
      from: 'March, 2017',
      to: 'August, 2018'
    },
    {
      title: 'Software Engineer',
      from: 'March, 2018',
      to: 'August, 2018'
    },
    {
      title: 'Front End Tech Lead',
      from: 'August, 2018',
      to: 'Present'
    },
  ],
  projects: [
    {
      name: 'SiteMinder.com Website',
      desc: `
        I'm the lead developer working on the SiteMinder.com website. The
        website runs on Wordpress, supports six languages and is maintained
        using a Webpack build.
      `,
      snaps: [
        {
          src: home,
          caption: 'The SiteMinder.com home page'
        },
        {
          src: pricing,
          caption: 'Product pricing page'
        },
        {
          src: customerSuccess,
          caption: 'Customer Success page (Customer case studies and testimonials)'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'https://www.siteminder.com/'
        }
      ]
    },
    {
      name: 'Recruitment Website',
      desc: `
        My team are responsible for the company's recruitment assets, surrounding
        technical and non-technical recruitment. <br><br>We build these sites using
         the Vue.js framework, running on a Webpack build with support for ES6 and SCSS.
      `,
      snaps: [
        {
          src: techspace,
          caption: 'The Techspace home page, a recruitment website for technical staff'
        },
        {
          src: welcome,
          caption: 'The `Welcome` micro site, a driver for employee retention'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'https://techspace.siteminder.com/'
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
          caption: 'A generic SiteMinder landing page'
        },
        {
          src: lp2,
          caption: 'A generic SiteMinder landing page'
        },
        {
          src: lp3,
          caption: 'A landing page for gated content'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://sm.siteminder.com/channelmanager-14day-free-trial'
        }
      ]
    },
    {
      name: 'Internal Apps',
      desc: `
        SiteMinder has a handful of internal web apps which are maintained by my
         team. One of them is the Quote app, which allows our sales team to
         quote and process sales data on the fly. <br><br>The app is built on
         Vue.js and makes use of Google sign in for authentication to a backend API.
      `,
      snaps: [
        {
          src: quote,
          caption: 'The internal app - Quote'
        }
      ]
    },
    {
      name: 'Interactive eBook',
      desc: `
        My team developed and maintain a handful of interactive assets used to
        drive content marketing. <br><br>These assets are built using a Vue.js
        front end, services by a Webpack build with support for Sass and ES6.
      `,
      snaps: [
        {
          src: ebook,
          caption: 'The internal app - Quote'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'https://resources.siteminder.com/ebook/en/interactive-quiz/'
        }
      ]
    }
  ]
}
