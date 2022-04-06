<template>
  <div id="navbar" class="navigation">
    <picture id="navbar_logo" class="navigation__logo-box">
      <img
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
        <NuxtLink to="/">
          <li class="navigation__toggle-item">
            Home
          </li>
        </NuxtLink>
        <NuxtLink to="#about">
          <li class="navigation__toggle-item">
            About
          </li>
        </NuxtLink>
        <NuxtLink to="#work">
          <li class="navigation__toggle-item">
            Work
          </li>
        </NuxtLink>
        <NuxtLink to="#contact">
          <li class="navigation__toggle-item">
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
