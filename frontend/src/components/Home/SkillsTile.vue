<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SkillsTile extends Vue {
  heading = 'Tech skills'

  route = '/skills'
}
</script>

<template>
  <section class="skills" role="region">
    <router-link :to="route">
      <h2>
        {{ heading }}
      </h2>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .skills {
    position: relative;
    z-index: 100;
  }

  a {
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
  }

  h2 {
    margin: auto;
    display: inline-block;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      height: 2px;
      width: 100%;
      background: #000;
    }

    &:before {
      bottom: calc(100% + 5px);
    }

    &:after {
      top: calc(100% + 3px);
    }
  }
</style>
