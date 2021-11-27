<template>
  <header
    class="header"
    :class="{
      'index' : (page === 'index'),
      '-small' : (page === 'websites' || page === 'graphics' || page === 'contact'),
    }"
  >
    <transition-group name="bk" tag="div" class="bk-img">
      <div v-if="page === 'index'" key="img1" class="header-img1" />
      <div v-else-if="page === 'websites'" key="img2" class="header-img2" />
      <div v-else-if="page === 'graphics'" key="img2" class="header-img3" />
      <div v-else key="img3" class="header-img2" />
    </transition-group>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--sub">Hola, I'm <span>Dan</span></span>
        <span class="heading-primary--main u-margin-bottom-med u-padding-x">Front-End Developer</span>
      </h1>
      <div v-if="page === 'index'">
        <NuxtLink to="/work" class="btn btn--light">
          View Portfolio
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['page'])
  }
}
</script>
