import home from './images/home.jpg'
import blog from './images/blog.jpg'
import venue from './images/venue.jpg'

import logo from './images/logo.jpg'
export default {
  name: 'Space&Co.',
  tags: ['gpt', 'space and co', 'spaceandco'],
  logo: logo,
  description: `I was the lead developer working on the Space&Co. website in late 2015 as part of my role with The GPT Group.`,
  roles: [
    {
      title: 'Front End Developer',
      from: 'September, 2015',
      to: 'June, 2016'
    }
  ],
  projects: [
    {
      name: 'Space&Co. Website',
      desc: `
        During my time with Space&Co. I worked closely with a team of talented designers to rebuild the company's website inline with a new brand for the business.
      `,
      snaps: [
        {
          src: home,
          caption: 'The Space&Co. home page'
        },
        {
          src: blog,
          caption: 'The Space&Co. blog'
        },
        {
          src: venue,
          caption: 'A venue page for the Space&Co. business'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://spaceandco.com.au/'
        }
      ]
    }
  ]
}
