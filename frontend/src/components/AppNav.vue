<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppNav extends Vue {
  open = false

  navItems = [
    {
      name: 'My Work',
      href: '/work/'
    },
    {
      name: 'Just for fun',
      href: '/fun/'
    },
    {
      name: 'Contact',
      href: '/contact/'
    },
  ]

  toggle () {
    this.open = this.open ? false : true
  }

  get toggleAssist () {
    if (this.open) {
      return 'Close this menu'
    } else {
      return 'Open the menu'
    }
  }
}
</script>

<template>
  <nav class="nav" :class="{ open }">
    <div class="nav-items">
      <router-link v-for="item in navItems" :key="item.href" :to="item.href">
        {{item.name}}
      </router-link>
    </div>

    <button class="nav-toggle" :aria-label="toggleAssist" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.nav {
  display: inline-block;
  @include font-featured-secondary ();
}

a {
  display: inline-block;
  padding: 1em 1.5em;
  color: $color-black;
  position: relative;

  // The nav item underline
  &:after {
    content: '';
    position: absolute;
    top: calc(100% - 0.8em);
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    border-radius: 4px;
    background: $color-black;
    transition: all 0.5s ease;
  }
  &:hover,
  &:focus {
    &:after {
      width: calc(100% - 3em);
    }
  }
}

.nav-toggle {
  display: inline-block;
  padding: 12px 16px;
  margin: auto 0 auto 8px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: none;

  &:hover,
  &:focus {
    span {
      background: $color-peach;
    }
  }

  span {
    background: $color-black;
    height: 3px;
    width: 18px;
    margin-bottom: 3px;
    display: block;
    position: relative;
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.nav.open {
  // Display the nav items

  // The hamburger becomes a cross
  .nav-toggle {
    span:first-child {
      transform-origin: top left;
      transform: rotate(45deg);
      right: -4px;
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform-origin: bottom left;
      transform: rotate(-45deg);
      right: -4px;
    }
  }
}

@media screen and (max-width: $break-sm) {
  .nav-toggle {
    display: inline-block;
  }

  .nav-items {
    position: absolute;
    top: 55px;
    left: -100%;
    z-index: 1000;
    background: $color-parchment;
    width: 70vw;
    height: 100vh;
    box-shadow: inset 0 2px 3px rgba(#000, 0.15);
    transition: all 0.5s ease;
  }

  .nav.open .nav-items {
    left: 0;
  }

  a {
    display: block;
    padding-left: $space;
    padding-right: $space;

    // The nav item underline
    &:after {
      display: none;
    }
  }
}
</style>
