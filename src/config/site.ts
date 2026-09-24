/**
 * MASTER SITE CONFIG
 * Identity, contact info, social links, and nav — edit here, not in components.
 * Everything in this file is imported by SiteHead, SiteFoot, SAbout, and SCTA.
 */

export const site = {
  name: 'LoHan Barnes',
  location: 'Santa Monica, CA',
  email: 'lohanbarnes@gmail.com',
  phone: '310-628-8550',
  phoneHref: 'tel:+13106288550',
  // Opens Gmail compose in a new tab instead of the OS default mail app
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=lohanbarnes@gmail.com',
}

export const socials = {
  // TODO: still a placeholder — add your CodePen URL when you have one
  codepen: '#',
  linkedin: 'https://www.linkedin.com/in/lohan-barnes-3595802a9/',
  github: 'https://github.com/LoHanBarnes',
}

export const nav = [
  { id: '/', text: 'Home' },
  { id: '/resources', text: 'Resources' },
  { id: '/wet-invention-challenge', text: 'WET Challenge' },
  { id: '/capstone-project', text: 'Capstone' },
  { id: '/past-projects', text: 'Past Projects' },
  { id: '/blog', text: 'Blog' },
]
