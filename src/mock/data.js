import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'alpha2phi | Developer and Freelancer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer, Blogger and Freelancer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, nice to meet',
  name: 'you',
  subtitle: 'I am the developer of alpha2phi.com',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.png',
  paragraphOne: 'Developer, Blogger and Freelancer',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  // id: nanoid(),
  // img: 'project.jpg',
  // title: 'XXX',
  // info: 'XX',
  // info2: '',
  // url: 'https://github.com/alpha2phi',
  // repo: 'https://github.com/alpha2phi', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alpha2phi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alpha2phi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
