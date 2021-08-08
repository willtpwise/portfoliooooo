import home from "./home.jpg";

import logo from "./vyro-logo.png";

export default {
  name: "Vyro",
  tags: ["energy", "electric car", "vehicle"],
  logo: logo,
  description: `Vyro is an early stage impact focused startup with a mission to accelerate the adoption of electric vehicles in Australia. I'm the Chief Technology Officer and one of two co-founders at Vyro.`,
  roles: [
    {
      title: "CTO & Co-founder",
      from: "August, 2021",
      to: "Present"
    }
  ],
  projects: [
    {
      name: "Vyro Website",
      snaps: [
        {
          src: home,
          caption: "The Wattle home page"
        }
      ],
      links: [
        {
          label: "Visit Sample",
          href: "https://www.vyro.com.au/"
        }
      ]
    }
  ]
};
