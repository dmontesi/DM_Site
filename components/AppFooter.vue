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
            <li class="footer__item">
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
            </li>
          </ul>
        </div>
      </div>
      <div class="col-3">
        <div class="footer__column social">
          <!-- <a
            href="https://github.com/dmontesi"
            target="_blank"
          ><i class="fab fa-github-alt"></i
          ></a>
          <a
            href="https://www.behance.net/dmontesinos"
            target="_blank"
          ><i class="fab fa-behance"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/daniel-montesinos"
            target="_blank"
          ><i class="fab fa-linkedin-in"></i
          ></a> -->
          <a
            href="https://github.com/dmontesi"
            target="_blank"
          ><ph-github-logo :size="28" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-montesinos"
            target="_blank"
            class=""
          ><ph-linkedin-logo :size="28" />
          </a>
        </div>
      </div>
      <p class="footer__copyright col-1">
        2021 &copy; Dan Montesinos. All Rights Reserved. Site development by
        <a
          href="http://danmontesinos.com/"
          target="_blank"
          class="footer__link"
        >Dan Montesinos.</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { PhLinkedinLogo, PhGithubLogo } from 'phosphor-vue'

export default {
  components: { PhLinkedinLogo, PhGithubLogo }
}
</script>
