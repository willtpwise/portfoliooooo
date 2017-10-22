import image1 from './siteminder-1.jpg'
import image2 from './siteminder-2.jpg'
export default {
  name: 'SiteMinder',
  tags: ['current'],
  description: `I've been working with SiteMinder since 2016 as a Front End Engineer, and more recently as a Lead Web Developer managing a team of three.`,
  projects: [
    {
      name: 'Work example',
      desc: `A leading description about this sample`,
      snaps: [
        {
          src: image1,
          caption: 'A great image caption'
        },
        {
          src: image2,
          caption: 'A great image caption'
        },
        {
          src: image1,
          caption: 'A great image caption'
        },
        {
          src: image2,
          caption: 'A great image caption'
        }
      ],
      links: [
        {
          label: 'Live site',
          href: '#'
        },
        {
          label: 'Live site',
          href: '#'
        }
      ]
    },
    {
      name: 'Work example',
      desc: `A leading description about this sample`,
      snaps: [
        {
          src: image1,
          caption: 'A great image caption'
        },
        {
          src: image2,
          caption: 'A great image caption'
        },
        {
          src: image1,
          caption: 'A great image caption'
        },
        {
          src: image2,
          caption: 'A great image caption'
        }
      ]
    }
  ]
}
