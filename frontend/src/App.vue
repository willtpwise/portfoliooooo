<script>
import { Vue, Component } from 'vue-property-decorator'
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'

@Component({
  components: {
    AppFooter,
    AppHeader
  }
})
export default class App extends Vue {

}
</script>

<template>
  <div class="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<style lang="scss">
</style>
