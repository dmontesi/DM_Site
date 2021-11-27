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
  ]
})

export const mutations = {
  updatePage (state, pageName) {
    state.page = pageName
  }
}
