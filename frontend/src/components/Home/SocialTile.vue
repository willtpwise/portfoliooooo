<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SocialTile extends Vue {
  title = `Let's talk`
  phone = '+61 448 509 543'
  email = 'will@williamwise.net'
}
</script>

<template>
  <section class="social-tile" role="region">
    <h2>{{title}}</h2>
    <p>
      <a :href="`tel:${phone}`">{{phone}}</a>
    </p>

    <p>
      <a :href="`mailto:${email}`">{{email}}</a>
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.social-tile {
  color: $color-parchment;
  padding: $space;
  border-bottom-left-radius: 80px;
  text-align: right;
  background-color: $color-black;
}

h2 {
  margin: 0 0 8px 0;
}

a {
  color: inherit;

  &:hover {
    color: #fff;
  }
}

@media screen and (max-width: $break-sm) {
  .social-tile {
    border-radius: 0;
    text-align: center;
  }
}
</style>
