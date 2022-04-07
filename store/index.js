export const state = () => ({
  page: 'index',
  technologies: ['HTML', 'CSS', 'SCSS', 'Javascript (ES6)', 'Twig', 'Vue.js', 'Vuex', 'Vue CLI', 'Tailwind', 'Bootstrap', 'Wordpress', 'Craft CMS', 'Git', 'GitHub', 'GitLab', 'Pantheon', 'Adobe CC', 'Adobe XD', 'Zeplin', 'Affinity Studio'],
  selected: 'Filter by category',
  categories: ['website', 'graphic design', 'ux-design', 'all work'],
  posts: [
    {
      title: 'Wilson Group',
      description:
        'Static Property Management Website for Wilson Group built entirely on HTML and SCSS',
      alt: 'Wilson Group Property Management',
      image: 'wilson-small',
      imageLg: 'wilson',
      url: 'https://wilsongrouppm.com/',
      target: '_blank',
      external: true,
      cta: 'Visit Website',
      year: 2019,
      label: 'website',
      labels: ['HTML', 'SCSS'],
      featured: false
    },
    {
      title: 'This Site',
      description:
        'I rebuilt this site using Nuxt.js and Vue for having more options to add new features in the future.',
      alt: 'Dan Montesinos Web Development',
      image: 'hero-sm',
      imageLg: 'hero-md',
      url: 'https://github.com/dmontesi',
      external: true,
      target: '_blank',
      cta: 'View on Github',
      year: 2019,
      label: 'website',
      labels: ['Nuxt.js', 'Vue.js', 'SCSS'],
      featured: false
    },
    {
      title: 'Cedar Place',
      description:
        'Somerville’s condominium home community, wireframed and put together entirely from scratch.',
      alt: 'Cedar Place Condominiums',
      image: 'cedar-small',
      imageLg: 'cedar',
      url: 'https://cedar-place.web.app/',
      external: true,
      target: '_blank',
      cta: 'Visit Website',
      year: 2019,
      label: 'website',
      labels: ['HTML', 'SCSS', 'Green Sock', 'JQuery', 'XD'],
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
      external: true,
      target: '_blank',
      cta: 'Visit Website',
      year: 2020,
      label: 'website',
      labels: ['HTML', 'SCSS', 'JS'],
      featured: false
    },
    {
      title: 'Furniture Website Mockup',
      description:
        'Website & Mobile app for fictional furniture store.',
      alt: 'Furniture',
      image: 'maynooth-small',
      imageLg: 'maynooth',
      url: 'https://www.behance.net/dmontesinos',
      cta: 'Visit Page →',
      year: 2019,
      target: '_blank',
      label: 'ux-design',
      labels: ['Adobe XD'],
      featured: false
    },
    {
      title: 'Post-War CD',
      description:
        'Design for Last Builders Of Empire\'s Limited Edition Album "Post-War"',
      alt: 'Furniture',
      image: 'lboe-small',
      imageLg: 'lboe',
      url: 'https://www.behance.net/gallery/67382723/Digipak-CD-Sleeves-Last-Builders-Of-Empire-Post-War',
      cta: 'Visit Page →',
      target: '_blank',
      year: 2014,
      label: 'graphic design',
      labels: ['Adobe Illustrator', 'Adobe Photoshop'],
      featured: false
    },
    {
      title: 'Daily Menus',
      description:
        'Culinary School Daily Menus. UNEY, Venezuela.',
      alt: 'Furniture',
      image: 'menus-small',
      imageLg: 'menus',
      url: 'https://www.behance.net/gallery/46365033/Daily-Menus',
      cta: 'Visit Page →',
      target: '_blank',
      year: 2008,
      label: 'graphic design',
      labels: ['Adobe Illustrator', 'Adobe Photoshop'],
      featured: false
    },
    {
      title: 'Book Design',
      description:
        'Student\'s Community Service Law',
      alt: 'Furniture',
      image: 'ldsc-book-small',
      imageLg: 'ldsc-book',
      url: 'https://www.behance.net/gallery/70538225/Students-Community-Service-Law-Book-Design',
      cta: 'Visit Page →',
      target: '_blank',
      year: 2008,
      label: 'graphic design',
      labels: ['Adobe InDesign', 'Adobe Illustrator'],
      featured: false
    }
  ]
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  }
}

export const getters = {
  filteredLabel (state) {
    const filter = new RegExp(state.selected, 'i')
    return state.posts.filter(el => el.label.match(filter))
  }
}
