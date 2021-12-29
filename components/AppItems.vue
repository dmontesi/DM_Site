<template>
  <div class="items">
    <h3 class="heading-tertiary">
      Some of the technologies I most commonly use:
    </h3>
    <ul class="items__list">
      <li v-for="item in technologies" :key="item.title" class="items__item">
        <strong class="bold">{{ item.title }}</strong> <span>{{ item.technology }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['technologies'])
}
</script>

<style>

</style>
