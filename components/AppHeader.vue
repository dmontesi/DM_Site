<template>
  <header
    class="header"
    :class="{
      index: page === 'index',
      '-small': page === 'work' || page === 'graphics' || page === 'contact',
    }"
  >
    <transition-group name="bk" tag="div" class="bg-img">
      <div
        v-if="page === 'index'"
        key="img1"
        class="header-img1"
        title="Cover image by Etienne Bösiger."
      />
      <div v-else-if="page === 'work'" key="img2" class="header-img2" />
      <div v-else key="img3" class="header-img3" />
    </transition-group>

    <div class="header__body">
      <div
        class="heading-primary"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="400"
      >
        <h4
          class="heading-primary--eyebrow"
        >
          Hi, I'm <span> Dan</span>
        </h4>
        <h1 class="heading-primary--main u-margin-bottom-med u-padding-x">
          <vue-typer
            :text="[
              'Front End Developer & Designer',
            ]"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="1000"
            :type-delay="90"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="select-all"
            :erase-on-complete="false"
            caret-animation="blink"
          />
          <br>
        </h1>
      </div>
    </div>

    <div
      class="header__footer"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-delay="3000"
    >
      <span
        class="scroll"
      >
        scroll
        <svg
          id="svg-arrow-down"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 22 35"
          style="enable-background: new 0 0 22 35"
          xml:space="preserve"
        >
          <polygon
            class="arrow"
            style="fill: #000000"
            points="20.58,11.584 12.004,20.158 12.004,0 9.996,0 9.996,20.158 1.42,11.584 0,13.004 11,24 22,13.004 "
          />
        </svg>
      </span>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
  computed: {
    ...mapState(['page'])
  }
}
</script>
