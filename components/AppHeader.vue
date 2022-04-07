<template>
  <header
    class="header"
    :class="{
      'index' : (page === 'index'),
      '-small' : (page === 'work' || page === 'graphics' || page === 'contact'),
    }"
  >
    <transition-group name="bk" tag="div" class="bk-img">
      <div v-if="page === 'index'" key="img1" class="header-img1" />
      <div v-else-if="page === 'work'" key="img2" class="header-img2" />
      <div v-else key="img3" class="header-img3" />
    </transition-group>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--sub">Hi, I'm <span>Dan</span></span>
        <span class="heading-primary--main u-margin-bottom-med u-padding-x">Front-End Developer <br/>& Designer</span>
      </h1>
      <div v-if="page === 'index'">
        <NuxtLink to="/work" class="btn btn--light">
          View Work
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
