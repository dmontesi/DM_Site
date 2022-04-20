<template>
  <div class="items">
    <h3 class="paragraph items__heading">
      Some of the technologies I most commonly use
    </h3>
    <ul class="items__list">
      <li
        v-for="item in technologies"
        :key="item.title"
        class="items__item"
      >
        <span
          data-aos="fade-up"
          data-aos-easing="ease"
        >{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
  computed: mapState(['technologies'])
}
</script>

<style></style>
