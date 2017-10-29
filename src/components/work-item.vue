<template>
  <div class="work-item">
    <figure class="work-graphic">
      <router-link :to='url' tabindex="-1">
        <img :src='work.logo' :alt='work.name'>
      </router-link>
    </figure>
    <div class="work-body">
      <router-link :to='url' tabindex="-1" class="work-item-title"><h3>{{work.name}}</h3></router-link>
      <ul class="work-meta">
        <li class="work-period">
          <span class="sr-only">Duration of employment</span>
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <duration :from='work.roles[0].from' :to='work.roles[work.roles.length - 1].to'></duration>
        </li>
        <li class="work-role">
          <span class="sr-only">My role was</span>
          <i class="fa fa-id-card-o" aria-hidden='true'></i>
          {{role}}
        </li>
      </ul>
      <p>
        {{work.description}}
      </p>
      <router-link :to='url' class="button">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
    </div>
  </div>
</template>
<script>
import duration from 'components/duration.vue'
export default {
  name: 'work-item',

  components: {
    duration
  },

  computed: {
    url () {
      return `/work/${this.index}`
    },

    role () {
      return this.work.roles[this.work.roles.length - 1].title
    }
  },

  props: ['work', 'index']
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.work-item {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 35px;

  &:not(:last-child) {
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(#fff, 0.3);
  }

  .work-item-title {
    color: inherit;
  }

  .work-meta {
    list-style: none;
    margin: -1.5rem 0 1.5rem 0;
    padding: 0;

    li {
      display: inline;
      margin: 0 12px 0 0;
      padding: 0;
      font-size: smaller;

      i {
        margin-right: 0.25em;
      }
    }
  }

  .work-graphic {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    background: $grey-dark;
    margin: 0;
    transition: all 0.3s ease;

    img {
      width: 100%;
      height: auto;
    }

    &:hover {
      transform: translateY(-8px);
    }
  }

  .work-body {
    margin: auto 0;
    text-align: left;
    padding-left: 35px;
    width: calc( 100% - 250px );
    box-sizing: border-box;
  }

  @media #{$tablet} {
    .work-graphic {
      margin: 0 auto 35px auto;
    }
    .work-body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
