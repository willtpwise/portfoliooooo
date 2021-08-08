import home from "./home.jpg";

import logo from "./wattle_logo.svg";

export default {
  name: "Wattle",
  tags: ["energy"],
  logo: logo,
  description: `Wattle is an early stage startup and renewable energy provider in Sydney. I was the principal engineer at Wattle throughout early 2021.`,
  roles: [
    {
      title: "Principal Engineer",
      from: "January, 2021",
      to: "August, 2021"
    }
  ],
  projects: [
    {
      name: "Wattle Website",
      snaps: [
        {
          src: home,
          caption: "The Wattle home page"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://joinwattle.com.au/"
        }
      ]
    }
  ]
};
