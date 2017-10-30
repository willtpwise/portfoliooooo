<template>
  <header class='app-header' :class="{'app-header--open': open}" role="banner">
    <div class="container">
      <nav class="app-header-nav" role="navigation" :aria-expanded='open'>
        <ul>
          <li v-for="item in menu">
            <router-link :to="item.href" :tabindex="itemTabIndex" v-html="item.label"></router-link>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        @click='toggleNav($event)'
        class="app-header-toggle"
        aria-label="Click to toggle the main navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'app-header',

    data () {
      return {
        open: false,
        menu: [
          {
            href: '/',
            label: '<i class="fa fa-home" aria-label="Home"></i>'
          },
          {
            href: '/work',
            label: 'Work'
          },
          {
            href: '/contact',
            label: 'Contact'
          }
        ]
      }
    },

    methods: {
      toggleNav (e) {
        e.preventDefault()
        if (this.open) {
          this.open = false
        } else {
          this.open = true
        }
      }
    },

    computed: {
      itemTabIndex () {
        if (!this.open) {
          return '-1'
        }
      }
    }
  }
</script>
<style lang='scss'>
  @import './../assets/variables.scss';
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    z-index: 500;

    .container {
      display: flex;
      flex-flow: row nowrap;
    }

    .app-header-me {
      padding: 15px 0;
      margin: auto 0;
    }

    .app-header-nav {
      margin-left: auto;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin: 0;
        padding: 0;
        display: inline;
        position: relative;
        top: -100px;
        left: 0;
        transition: all 0.4s ease;

        &:nth-child(1) {
          transition-duration: 1.2s
        }
        &:nth-child(2) {
          transition-duration: 0.8s
        }
      }

      a {
        display: inline-block;
        padding: 12px 16px;
        margin: 5px;
        color: #fff;
        border-radius: $radius;
        background: $primary;

        &:hover,
        &:focus {
          background: $primary_light;
        }
      }
    }

    .app-header-toggle {
      display: inline-block;
      padding: 12px 16px;
      margin: auto 0 auto 8px;
      color: #fff;
      border-radius: $radius;
      background: $primary;
      border: none;
      cursor: pointer;

      &:hover {
        background: $primary_light
      }

      span {
        background: #fff;
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

    &.app-header--open {
      // Hamburger to cross
      .app-header-toggle {

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

      // Menu item drop
      .app-header-nav {
        li {
          top: 0;
        }
      }
    }

    @media #{$tablet} {
      .app-header-nav a,
      .app-header-nav .app-header-toggle {
        padding: 10px 12px;
        margin: 4px;
      }

      .app-header-toggle {
        margin: auto 0 auto 4px;
      }
    }
  }
</style>
