import web2 from './images/web-2.jpg'
import web3 from './images/web-3.jpg'
import web4 from './images/web-4.jpg'
import logo from './images/logo.png'
export default {
  name: 'Cucina De Luca',
  tags: ['gpt', 'blog', 'group'],
  logo: logo,
  description: `
    Cucina De Luca is a family cafe, located in the heart of Carlingford, Sydney.
    I wrote the website for the business and guided them through the complexities of SEO and SEM.`,
  roles: [
    {
      title: 'Freelance Developer',
      from: 'March, 2017',
      to: 'April, 2017'
    }
  ],
  projects: [
    {
      name: 'Cucina De Luca Website',
      desc: `
        The Cucina De Luca website is built on Wordpress. It's a simple and elegant site, featuring the café's menu and contact details.
      `,
      snaps: [
        {
          src: web2,
          caption: 'The home page'
        },
        {
          src: web3,
          caption: 'The catering'
        },
        {
          src: web4,
          caption: 'The contact page'
        }
      ],
      links: [
        {
          label: 'Visit Sample',
          href: 'http://www.cucinadeluca.com/'
        }
      ]
    }
  ]
}
