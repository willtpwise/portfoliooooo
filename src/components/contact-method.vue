<template>
  <div class="contact-method">
    <a :href="contact.link.href">
      <span class="contact-method-icon fa-stack fa-lg" aria-hidden="true">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-stack-1x fa-inverse" :class="contact.icon"></i>
      </span>
      <p class="sr-only">{{contact.name}}</p>
      <p class="contact-method-desc">
        {{contact.link.label}}
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'contact-method',

  props: ['contact']
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.contact-method {
  padding: 20px;
  margin: 45px auto;
  text-align: center;

  .contact-method-icon {
    font-size: 2.5em;
    margin-bottom: 20px;
    .fa-circle {
      color: $primary;
    }
  }

  .contact-method-desc {
    padding-bottom: 0;
  }
}
</style>
