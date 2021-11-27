<template>
  <div id="navbar" class="navigation">
    <picture id="navbar_logo" class="navigation__logo-box">
      <source
        srcset="~/assets/images/logo.png 1x, ~/assets/images/logo.png 2x"
        media="(max-width: 75em)"
        class="navigation__logo"
      >
      <img
        srcset="~/assets/images/logo.png 1x, ~/assets/images/logo.png 2x"
        alt="Logo"
        src="~/assets/images/logo.png"
        class="navigation__logo"
      >
    </picture>

    <div class="navigation__toggle-box">
      <input id="nav-toggle" type="checkbox" class="navigation__checkbox">
      <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">
&nbsp;
      </div>

      <nav class="navigation__nav-toggle">
        <ul class="navigation__toggle-list">
          <NuxtLink to="/">
            <li class="navigation__toggle-item">
              Home
            </li>
          </NuxtLink>
          <NuxtLink to="/work">
            <li class="navigation__toggle-item">
              Work
            </li>
          </NuxtLink>
          <NuxtLink to="/contact">
            <li class="navigation__toggle-item">
              Contact
            </li>
          </NuxtLink>
        </ul>
      </nav>
    </div>

    <nav class="navigation__nav">
      <ul class="navigation__nav-primary u-center-text">
        <NuxtLink exact to="/">
          <li class="navigation__item">
            Home
          </li>
        </NuxtLink>
        <NuxtLink to="/websites">
          <li class="navigation__item">
            Websites
          </li>
        </NuxtLink>
        <NuxtLink to="/graphics">
          <li class="navigation__item">
            Graphics
          </li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li class="navigation__item">
            Contact
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>
