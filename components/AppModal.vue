<template>
  <div v-if="show" class="modal modal__overlay" @click.self="close">
    <div class="modal__content">
      <button class="modal__close" @click="close">
        ✕
      </button>
      <div class="modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
