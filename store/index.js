export const state = () => ({
  page: 'index',
  technologies: [
    { title: 'Languages:', technology: 'HTML, CSS, SCSS, Javascript (ES6), Twig' },
    { title: 'Libraries:', technology: 'Vue, Vuex' },
    { title: 'Frameworks:', technology: 'Bootstrap, Bulma, Vue CLI, NuxtJS, Tailwind' },
    { title: 'CMS:', technology: 'Wordpress, Craft' },
    { title: 'Build:', technology: 'Node, npm, Gulp, Webpack' },
    { title: 'Repos:', technology: 'GitHub, GitLab, Pantheon' },
    { title: 'Other:', technology: 'Adobe Creative Suite, Adobe XD, Adobe Lightroom, Zeplin, Affinity Studio, Ableton Live' }
  ],
  categories: ['website', 'graphic design', 'ux-design'],
  cards: [
    {
      title: 'Front End Development',
      description:
        'Offering highly responsive, mobile friendly sites that look up to date with the latest trends.',
      image: 'web-small',
      imageLg: 'web',
      alt: 'Coding Website',
      url: '/websites',
      cta: 'View Samples →',
      featured: true
    },
    {
      title: 'Graphic Design',
      description:
        'From high end brochures to band album covers. Printing available through third party',
      alt: 'CD Cover',
      image: 'lboe-small',
      imageLg: 'lboe',
      url: '/graphic design',
      cta: 'View Samples →',
      featured: true
    },
    {
      title: 'Wilson Group',
      description:
        'Static Property Management Website for Wilson Group',
      alt: 'Wilson Group Property Management',
      image: 'wilson-small',
      imageLg: 'wilson',
      url: 'https://wilsongrouppm.com/',
      cta: 'Visit Website →',
      year: 2019,
      category: 'website',
      labels: ['html', 'scss'],
      featured: false
    },
    {
      title: 'Cedar Place',
      description:
        'Somerville’s condominium home community, Cedar Place offers an array of fine residences for every taste.',
      alt: 'Cedar Place Condominiums',
      image: 'cedar-small',
      imageLg: 'cedar',
      url: 'https://cedar-place.web.app/',
      cta: 'Visit Website →',
      year: 2019,
      category: 'website',
      labels: ['html', 'scss', 'javascript'],
      featured: false
    },
    {
      title: 'InFocus Real Estate Marketing',
      description:
        'Website Design & Responsive Web Development for InFocus RE Marketing.',
      alt: 'Real Estate Marketing',
      image: 'infocus',
      imageLg: 'infocus',
      url: 'https://infocusremarketing.com/',
      cta: 'Visit Website →',
      year: 2020,
      category: 'website',
      labels: ['html', 'scss', 'js'],
      featured: false
    },
    {
      title: 'Furniture Website',
      description:
        'Website & Mobile app for fictional furniture store.',
      alt: 'Furniture',
      image: 'lboe-small',
      imageLg: 'lboe',
      url: '/',
      cta: 'Visit Page →',
      year: 2019,
      category: 'ux-design',
      labels: ['ux'],
      featured: false
    },
    {
      title: 'Post-War CD',
      description:
        'Design for Last Builders Of Empire\'s Limited Edition Album "Post-War"',
      alt: 'Furniture',
      image: 'lboe-small',
      imageLg: 'lboe',
      url: '/',
      cta: 'Visit Page →',
      year: 2014,
      category: 'graphic design',
      labels: ['illustrator', 'photoshop'],
      featured: false
    },
    {
      title: 'Daily Menus',
      description:
        'Culinary School Daily Menus. UNEY, Venezuela.',
      alt: 'Furniture',
      image: 'menus-small',
      imageLg: 'menus',
      url: '/',
      cta: 'Visit Page →',
      year: 2008,
      category: 'graphic design',
      labels: ['illustrator', 'photoshop'],
      featured: false
    },
    {
      title: 'Book Design',
      description:
        'Student\'s Community Service Law',
      alt: 'Furniture',
      image: 'ldsc-book-small',
      imageLg: 'ldsc-book',
      url: '/',
      cta: 'Visit Page →',
      year: 2008,
      category: 'graphic design',
      labels: ['illustrator', 'photoshop'],
      featured: false
    }
  ]
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  }
}
