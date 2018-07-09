<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class WorkSample extends Vue {
  @Prop() heading
  @Prop() image
  @Prop() description
  @Prop() link
}
</script>

<template>
  <a :href="link" class="sample" target="_blank">
    <figure class="sample-graphic">
      <img :src="image" :alt="heading">
    </figure>

    <div class="sample-content">
      <h2>{{heading}}</h2>
      <p v-html="description"></p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.sample {
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 2em;
  background: #fff;
  padding: 1.5em;
  position: relative;
  color: inherit;

  &:last-child {
    margin-bottom: 0;
  }

  &:before,
  &:after {
    --x-offset: -50%;

    content: '';
    position: absolute;
    bottom: 0;
    transform: translate(var(--x-offset), 100%) rotate(45deg);
    width: 1.5em;
    height: 1.5em;
    box-shadow: 0 0 1px rgba(#000, 0.2);
  }

  &:before {
    left: 0;
  }

  &:after {
    --x-offset: 50%;
    right: 0;
  }
}

figure {
  margin: 0 2em 0 0;
}

img {
  width: 100%;
  border: 1px solid #f2f2f2;
}

@media screen and (max-width: $break-sm) {
  .sample {
    display: block;

    figure {
      margin: 0;
    }
  }
}
</style>
