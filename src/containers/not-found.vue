<template>
  <article class='not-found'>
    <header>
      <div class="container">
        <h1>404 Not found...</h1>
      </div>
    </header>
    <main>
      <div class="container">
        <p>
          That page couldn't be found. Perhaps try the <router-link to="/">home page</router-link>.
        </p>
      </div>
    </main>
  </article>
</template>
<script>
export default {
  name: 'not-found'
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.not-found {
  padding: 60px 0;
}
</style>
