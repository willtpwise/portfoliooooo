<template>
  <div id="app" class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from 'components/app-header.vue'
import AppFooter from 'components/app-footer.vue'
export default {
  name: 'app',

  components: {
    AppHeader,
    AppFooter
  },

  mounted () {
    this.$router.afterEach((to, from) => {
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style>
.app {
  text-align: center;
}
</style>
