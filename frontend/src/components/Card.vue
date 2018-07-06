<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() title
  @Prop() body
  @Prop() image
  @Prop() url
  @Prop({ default: 'Read more' }) readMore

  get external () {
    return this.url.indexOf('http') === 0
  }

  navigate (url) {
    if (this.external) {
      location.href = url
    } else {
      this.$router.push(url)
    }
  }
}
</script>

<template>
  <article class="card" @click="navigate(url)">

    <figure>
      <img :src="image" :alt="title">
    </figure>

    <header role="banner">
      <h2>{{title}}</h2>
    </header>

    <main v-html="body">

    </main>

    <footer role="contentinfo" v-if="readMore && url">
      <a v-if="external" :href="url" taget="_blank">{{ readMore }}</a>
      <router-link v-else :to="url">{{ readMore }}</router-link>
    </footer>

  </article>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .card {
    margin-bottom: 3em;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    background: #fff;
    margin: 5px;
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0 2px 20px rgba(#000, 0.1);
      transform: translateY(-5px);
    }
  }

  figure {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
    }
  }

  figure,
  main,
  footer {
    margin-bottom: 1.5em;
  }

  header,
  main,
  footer {
    width: 100%;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  footer {
    text-align: right;
    margin-top: auto;
  }

  h2 {
    margin-top: 0;
    font-size: 2em;
    margin-bottom: 0.5em;
  }
</style>
