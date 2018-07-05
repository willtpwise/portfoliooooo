<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import Social from '@/components/Social'

@Component({
  components: {
    Social
  }
})
export default class AppFooter extends Vue {
  get year () {
    const d = new Date()
    return d.getFullYear()
  }
}
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-col">
      <small>&copy; {{year}} Will Wise</small>
    </div>
    <div class="footer-col">
      <social />
    </div>
    <div class="footer-col">
      <small>
        <router-link to="/contact/">Contact me</router-link>
      </small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";
.footer {
  display: grid;
  grid-template-columns: repeat(3, 33.333% [col-start]);
  @include font-featured-secondary ();
}

a {
  color: $color-black;
}

.footer-col {
  padding: $space / 2 $space;

  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(3) {
    text-align: right;
  }
}

@media screen and (max-width: $break-sm) {
  .footer {
    display: block;
  }

  .footer-col {
    text-align: center !important;
  }
}
</style>
