<template>
  <div class="cards__grid">
    <div v-for="card in cards" :key="card.title" class="card">
      <picture>
        <!-- <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.webp`)"
          media="(min-width:56.25em)"
          type="image/webp"
        > -->
        <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.jpg`)"
          media="(min-width:56.25em)"
          type="image/jpg"
        >
        <img
          :data-src="require(`~/assets/images/${card.image}.jpg`)"
          class="card__img lazyload"
        >
      </picture>

      <div class="card__content">
        <h3 class="heading-tertiary u-margin-bottom-tiny">
          {{ card.title }}
        </h3>
        <p class="paragraph">
          {{ card.description }}
        </p>
      </div>
      <a
        href="/websites"
        rel="noreferrer"
        class="card__cta text-link"
      >View Samples →</a>
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
          description:
            'Offering highly responsive, mobile friendly sites that look up to date with the latest trends.',
          image: 'web-small',
          imageLg: 'web',
          alt: 'Coding Website',
          url: '/websites',
          featured: true
        },
        {
          title: 'Graphic Design',
          description:
            'From high end brochures to band album covers. Printing available through third party',
          alt: 'CD Cover',
          image: 'lboe-small',
          imageLg: 'lboe',
          url: '/graphics',
          featured: true
        },
        {
          title: 'Wilson Group',
          description:
            'From high end brochures to band album covers. Printing available through third party',
          alt: 'CD Cover',
          image: 'lboe-small',
          imageLg: 'lboe',
          url: '/graphics',
          featured: false
        },
        {
          title: 'Cedar Place',
          description:
            'From high end brochures to band album covers. Printing available through third party',
          alt: 'CD Cover',
          image: 'lboe-small',
          imageLg: 'lboe',
          url: '/graphics',
          featured: false
        },
        {
          title: 'Wilson Group',
          description:
            'From high end brochures to band album covers. Printing available through third party',
          alt: 'CD Cover',
          image: 'lboe-small',
          imageLg: 'lboe',
          url: '/graphics',
          featured: false
        },
        {
          title: 'Cedar Place',
          description:
            'From high end brochures to band album covers. Printing available through third party',
          alt: 'CD Cover',
          image: 'lboe-small',
          imageLg: 'lboe',
          url: '/graphics',
          featured: false
        }
      ]
    }
  }
}
</script>

<style></style>
