<template>
  <header
    class="header"
    :class="{
      index: page === 'index',
      '-small': page === 'work' || page === 'graphics' || page === 'contact',
    }"
  >
    <transition-group name="bk" tag="div" class="bk-img">
      <div
        v-if="page === 'index'"
        key="img1"
        class="header-img1"
        title="Cover image by Etienne Bösiger."
      />
      <div v-else-if="page === 'work'" key="img2" class="header-img2" />
      <div v-else key="img3" class="header-img3" />
    </transition-group>

    <div class="header__text-box">
      <div class="heading-primary">
        <h4 class="heading-primary--eyebrow">
          Hi, I'm <span> Dan</span>
        </h4>
        <h1 class="heading-primary--main u-margin-bottom-med u-padding-x">
          <vue-typer
            :text="['Front End Developer','Designer', 'Front End Developer & Designer']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="170"
            :type-delay="90"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="select-all"
            :erase-on-complete="false"
            caret-animation="blink"
          /> <br>
        </h1>
      </div>
      <div v-if="page === 'index'">
        <NuxtLink to="#work" class="btn btn--light">
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
