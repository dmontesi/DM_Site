<template>
  <footer class="footer">
    <div class="grid">
      <div class="footer__logo-box">
        <img
          class="footer__logo"
          src="~/assets/images/logo-white.png"
          alt="Dan Montesinos Logo"
        >
      </div>
    </div>

    <div class="grid footer__items">
      <div class="col-3">
        <div class="footer__navigation">
          <ul class="footer__list">
            <!-- <li class="footer__item">
              <a href="index.html" class="footer__link">Home</a>
            </li>
            <li class="footer__item">
              <a href="about.html" class="footer__link">About</a>
            </li>
            <li class="footer__item">
              <a href="services.html" class="footer__link">Services</a>
            </li>
            <li class="footer__item">
              <a href="contact.html" class="footer__link">Contact</a>
            </li> -->
            <NuxtLink to="/">
              <li class="footer__item">
                Home
              </li>
            </NuxtLink>
            <NuxtLink to="#about">
              <li class="footer__item">
                About
              </li>
            </NuxtLink>
            <NuxtLink to="#work">
              <li class="footer__item">
                Work
              </li>
            </NuxtLink>
            <NuxtLink to="#contact">
              <li class="footer__item">
                Contact
              </li>
            </NuxtLink>
          </ul>
        </div>
      </div>
      <div class="col-3">
        <div class="footer__column social">
          <a
            href="https://github.com/dmontesi"
            target="_blank"
            aria-label="View code on Github"
          ><ph-github-logo :size="28" />
          </a>
          <a
            href="https://www.behance.net/dmontesinos"
            target="_blank"
            aria-label="View my work on Behance"
          ><ph-behance-logo :size="28" />
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-montesinos"
            target="_blank"
            class=""
            aria-label="View my profile on LinkedIn"
          ><ph-linkedin-logo :size="28" />
          </a>
        </div>
      </div>
      <p class="footer__copyright col-1">
        ©{{ currentYear }} | Site
        developed by
        <a
          href="http://danmontesinos.com/"
          target="_blank"
          class="link footer__link"
        >Dan Montesinos.</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { PhLinkedinLogo, PhGithubLogo, PhBehanceLogo } from 'phosphor-vue'

export default {
  components: { PhLinkedinLogo, PhGithubLogo, PhBehanceLogo },
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
