<template>
  <article class='home'>
    <page-header></page-header>
    <main role="main">
      <section role="section" aria-labelledby="about">
        <div class="container">
          <h2 id="about">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ac ex vel porttitor. Nunc sed venenatis justo, in convallis odio. Sed purus orci, volutpat a pharetra bibendum, gravida sed erat. Nam sed erat posuere,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur ac ex vel porttitor. Nunc sed venenatis justo, in convallis odio. Sed purus orci, volutpat a pharetra bibendum, gravida sed erat. Nam sed erat posuere,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <hr class="hr hr--large">
        </div>
      </section>
      <section role="section" aria-labelledby="langs">
        <div class="container">
          <h2 id="langs">Languages</h2>
          <skills></skills>
        </div>
      </section>
      <work></work>
    </main>
  </article>
</template>
<script>
import pageHeader from 'components/header.vue'
import skills from 'components/skills.vue'
import work from 'components/work.vue'
export default {
  name: 'home',

  components: {
    pageHeader,
    skills,
    work
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.home {
}
</style>
