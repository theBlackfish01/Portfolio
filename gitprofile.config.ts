// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'theBlackfish01', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/theBlackfish01/theBlackfish01.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/theBlackfish01/Portfolio, then set base to '/Portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true
          projects: [], // These projects will not be displayed
        },
      },
      manual: {
        // Properties for manually specifying projects, if you switch to manual mode
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep this array empty
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Wadood Ur Rehman Ranjha',
    description:
      'Computer Science undergraduate at NUST specializing in Machine Learning, Deep Learning, and Full-Stack Web Development.',
    imageURL: '',
  },
  social: {
    linkedin: 'wadood-ranjha',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+923330540123',
    email: 'wadood2003@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/theBlackfish01/Portfolio/main/Wadood%20Ranjha%20CV.pdf',
  },
  skills: [
    'Python',
    'C++',
    'C#',
    'Java',
    'JavaScript',
    'React',
    'Next.js',
    'Solidity',
    'PyTorch',
    'TensorFlow',
    'LSTM',
    'CNN',
    'NLP',
    'MongoDB',
    'Express.js',
    'Node.js',
    'HTML',
    'CSS',
    'Docker',
    'Git',
    'SQL',
  ],
  experiences: [
    {
      company: 'CETQAP',
      position: 'Machine Learning Intern',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://cetqap.org',
    },
  ],
  certifications: [
    {
      name: 'Neural Networks and Deep Learning',
      body: 'Coursera',
      year: '',
      link: '',
    },
    {
      name: 'Machine Learning with Python',
      body: 'IBM',
      year: '',
      link: '',
    },
    {
      name: 'Convolutional Neural Networks',
      body: 'DeepLearning.AI',
      year: '',
      link: '',
    },
    {
      name: 'Goethe-Zertifikat A1',
      body: 'Goethe Institute',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'NUST School of Electrical Engineering and Computer Science (SEECS)',
      degree: 'B.S. in Computer Science',
      from: '2022',
      to: 'Present',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: false,
};

export default CONFIG;
