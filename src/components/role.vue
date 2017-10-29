<template>
  <section class="role">
    <h2>Role</h2>
    <ul class="role-list">
      <li class="role-item" v-for='(role, index) in roles' :aria-labelledby="titleId(index)">
        <span class="role-icon fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-stack-1x fa-inverse" :class='icon(role.title)'></i>
        </span>
        <div class="role-content">
          <p class="role-title" :id="titleId(index)">{{role.title}}</p>
          <p class="role-sub">
            <small>
              <duration :from='role.from' :to='role.to'></duration>
            </small>
          </p>
          <p v-if='role.desc' class="role-desc">
            {{role.desc}}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import duration from 'components/duration.vue'
export default {
  name: 'role',

  props: ['roles'],

  components: {
    duration
  },

  data () {
    return {
      icons: {
        'Front End Developer': 'fa-code',
        'Lead Web Developer': 'fa-lightbulb-o',
        'Freelance Developer': 'fa-paint-brush',
        'Junior Front End Developer': 'fa-child'
      }
    }
  },

  methods: {
    icon (title) {
      return this.icons[title] || 'fa-code'
    },

    titleId (index) {
      return `role-item-${this._uid}${index}`
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.role {
  $role-bg: #f2f2f2;
  background: $role-bg;
  padding: 50px 0;
  .role-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;

    .role-item {
      margin: 2em auto;
      flex: 0 1 auto;

      .role-icon {
        font-size: 2em;
        margin-bottom: 0.5em;
        .fa-circle {
          color: $primary;
        }
      }

      .role-content {
        background: $role-bg;
        padding: 3px;
        position: relative;
        z-index: 4;
      }

      .role-sub {
        color: $grey;
        margin-top: -1.5rem;
        padding-bottom: 0;
      }

      .role-desc {
        padding-top: 10px;
        padding-bottom: 0;
        font-size: 0.9em;
        color: $grey-dark;
      }

      @media #{$tablet} {
        & {
          width: 100%;
        }
      }
    }


    // The line
    & {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 4em;
        right: 0;
        height: 1px;
        width: 100%;
        border-top: 1px dotted $grey-light;
      }

      @media #{$tablet} {
        &:before {
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
          border-left:  1px dotted $grey-light;
          border-top: none;
        }
      }
    }
  }
}
</style>
