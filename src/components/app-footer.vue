<template>
  <footer class='app-footer' role="contentinfo">
    <div class="container">
      <div class="app-footer-legal">
        &copy; {{year}} William Wise
      </div>
      <div class="app-footer-links">
        <a href="https://www.linkedin.com/in/will-wise-2a07bb6b/" title="LinkedIn" target="_blank">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <span class="sr-only">Find me on LinkedIn</span>
        </a>
        <a href="https://github.com/willtpwise" title="GitHub" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
          <span class="sr-only">Find me on GitHub</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',

  computed: {
    year () {
      let d = new Date()
      return d.getFullYear()
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.app-footer {
  background: #f2f2f2;
  padding: 60px 0;
  color: $grey;

  .app-footer-legal {
    font-size: 0.9em;
    margin-bottom: 1.5em
  }

  .app-footer-links {
    font-size: 1.5em;
    a {
      display: inline-block;
      margin: 5px;
    }
  }
}
</style>
