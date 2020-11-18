import lp1 from "./images/lp-1.jpg";
import lp2 from "./images/lp-2.jpg";
import lp3 from "./images/lp-3.jpg";
import pricing from "./images/pricing.jpg";
import techspace from "./images/techspace.jpg";
import customerSuccess from "./images/customer-success.jpg";
import welcome from "./images/welcome.jpg";
import channelManager from "./images/channel-manager.png";
import sso from "./images/sso.png";
import home from "./images/home.jpg";
import gha from "./images/gha.png";
import sputnik from "./images/sputnik.jpg";
import ebook from "./images/ebook.jpg";
import quote from "./images/quote.jpg";
import logo from "./images/logo.svg";

export default {
  name: "SiteMinder",
  tags: ["current", "SM", "site minder"],
  logo,
  description: `I've been working with SiteMinder since 2016 in multiple capacities, starting as a frontend engineer and progressing through to a principal engineer.`,
  roles: [
    {
      title: "Front End Developer",
      from: "August, 2016",
      to: "February, 2017"
    },
    {
      title: "Lead Web Developer",
      from: "March, 2017",
      to: "August, 2018"
    },
    {
      title: "Software Engineer",
      from: "March, 2018",
      to: "August, 2018"
    },
    {
      title: "Front End Tech Lead",
      from: "August, 2018",
      to: "June, 2019"
    },
    {
      title: "Principal Engineer",
      from: "June, 2019",
      to: "Present"
    }
  ],
  projects: [
    {
      name: "The Channel Manager",
      desc: `
        My main project with SiteMinder was to re-develop their cornerstone product "The Channel Manager" from a legacy Angular application to a more moden Vue.js, GraphQL and Node tech stack.
      `,
      snaps: [
        {
          src: channelManager,
          caption: "The Channel Manager"
        }
      ]
    },
    {
      name: "Single Sign On",
      desc: `
        I worked on the SSO project with SiteMinder to enhance the experience and security for customers when switching between products. The project saw me working closely alongside designers, UX professionals and senior architects.
      `,
      snaps: [
        {
          src: sso,
          caption: "The SiteMinder.com login page"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://login.siteminder.com/"
        }
      ]
    },
    {
      name: "Google Hotel Ads",
      desc: `
        When starting my role as a Software Engineer with SiteMinder I worked on the Google Hotel Ads project which saw me delivering both front and back end code using Vue.js, GraphQL and Node. Our databases made use of MySQL and Cassandra.
      `,
      snaps: [
        {
          src: gha,
          caption: "The GHA Dashboard"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://www.siteminder.com/"
        }
      ]
    },
    {
      name: "SiteMinder.com Website",
      desc: `
        In my second role with SiteMinder, I was the lead developer working on the SiteMinder.com website.
      `,
      snaps: [
        {
          src: home,
          caption: "The SiteMinder.com home page"
        },
        {
          src: pricing,
          caption: "Product pricing page"
        },
        {
          src: customerSuccess,
          caption:
            "Customer Success page (Customer case studies and testimonials)"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://www.siteminder.com/"
        }
      ]
    },
    {
      name: "Internal Design System",
      desc: `
        Alongside a team of front end developers I contributed to SiteMinder's design system – Sputnik, which is a branded Vue.js framework used by the company's various applications.
      `,
      snaps: [
        {
          src: sputnik,
          caption: "The Sputnik home page"
        }
      ]
    },
    {
      name: "Recruitment Website",
      desc: `
        My team are responsible for the company's recruitment assets, surrounding
        technical and non-technical recruitment. <br><br>We build these sites using
         the Vue.js framework, running on a Webpack build with support for ES6 and SCSS.
      `,
      snaps: [
        {
          src: techspace,
          caption:
            "The Techspace home page, a recruitment website for technical staff"
        },
        {
          src: welcome,
          caption: "The `Welcome` micro site, a driver for employee retention"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://techspace.siteminder.com/"
        }
      ]
    },
    {
      name: "Landing Pages",
      desc: `
        My team were responsible for a large collection of landing pages and
        other digital marketing assets.
      `,
      snaps: [
        {
          src: lp1,
          caption: "A generic SiteMinder landing page"
        },
        {
          src: lp2,
          caption: "A generic SiteMinder landing page"
        },
        {
          src: lp3,
          caption: "A landing page for gated content"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "http://sm.siteminder.com/channelmanager-14day-free-trial"
        }
      ]
    },
    {
      name: "Internal Apps",
      desc: `
        SiteMinder has a handful of internal web apps which are maintained by my
         team. One of them is the Quote app, which allows our sales team to
         quote and process sales data on the fly. <br><br>The app is built on
         Vue.js and makes use of Google sign in for authentication to a backend API.
      `,
      snaps: [
        {
          src: quote,
          caption: "The internal app - Quote"
        }
      ]
    },
    {
      name: "Interactive eBook",
      desc: `
        My team developed and maintain a handful of interactive assets used to
        drive content marketing. <br><br>These assets are built using a Vue.js
        front end, services by a Webpack build with support for Sass and ES6.
      `,
      snaps: [
        {
          src: ebook,
          caption: "The internal app - Quote"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://resources.siteminder.com/ebook/en/interactive-quiz/"
        }
      ]
    }
  ]
};
