<template>
  <div>
    <app-navigation />
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter'
import AppHeader from '~/components/AppHeader'
import AppNavigation from '~/components/AppNavigation'

export default {
  components: {
    AppFooter,
    AppHeader,
    AppNavigation
  }
}
</script>
