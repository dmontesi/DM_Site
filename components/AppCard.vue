<template>
  <div class="cards__wrapper">
    <div v-for="card in cards" :key="card.title" class="card">
      <div class="card__img">
        <picture>
          <source
            data-srcset="~/assets/images/WebP/web-small.webp 1x, ~/assets/images/WebP/web.webp 2x"
            type="image/webp"
          >
          <source
            data-srcset="~/assets/images/web-small.jpg 1x, ~/assets/images/web.jpg 2x"
            type="image/jpg"
          >
          <img
            data-srcset="~/assets/images/web-small.jpg 1x, ~/assets/images/web.jpg 2x"
            alt="Logo"
            src="~/assets/images/web-small.jpg"
            class="lazyload"
          >
        </picture>
      </div>
      <div class="card__content">
        <h3 class="heading-tertiary u-margin-bottom-tiny">
          {{ card.title }}
        </h3>
        <p class="paragraph">
          {{ card.description }}
        </p>
        <a
          href="https://danmontesinos.myportfolio.com/websites"
          rel="noreferrer"
          class="card__cta text-link"
        >View Samples →</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          title: 'Front End Development',
          description: 'Offering highly responsive, mobile friendly sites that look up to date with the latest trends.'
        },
        {
          title: 'Graphic Design',
          description: 'From high end brochures to band album covers. Printing available through third party'
        }
      ]
    }
  }
}
</script>

<style>

</style>
