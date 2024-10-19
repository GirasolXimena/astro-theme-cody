// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "xofeliaa",
  description: "",
  lang: "en-US",
  profile: {
    author: "xofeliaa",
    description: "minneapolis based multimedia artist"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/kirontoo/astro-theme-cody",
  },
  {
    icon: "mdi:soundcloud",
    friendlyName: "LinkedIn",
    link: "#",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:ndangamy@gmail.com",
  },
  {
    icon: "mdi:instagram",
    friendlyName: "rss",
    link: "/rss.xml"
  },
  {
    icon: "mdi:twitter",
    friendlyName: "rss",
    link: "/rss.xml"
  },
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "projects",
    path: '/projects'
  },
  {
    title: "archive",
    path: '/archive'
  }
];
