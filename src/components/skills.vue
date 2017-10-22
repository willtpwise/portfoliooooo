<template>
  <ul class='skills'>
    <li class="skills-item" v-for='skill in skills'>
      <figure>
        <img :src="skill.src" :alt="skill.name | alt">
        <figcaption>
          {{skill.name}}
        </figcaption>
      </figure>
    </li>
  </ul>
</template>
<script>
import VueIcon from 'assets/images/lang-icons/vue.png'

export default {
  name: 'skills',

  data () {
    return {
      skills: [
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        },
        {
          src: VueIcon,
          name: 'Vue.js'
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.skills {
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;

  .skills-item {
    list-style: none;
    margin: auto;
    padding: 10px;
    width: 25%;
    box-sizing: border-box;
    figure {
      img {
        width: 42px;
      }

      figcaption {
        color: $grey-dark;
      }
    }
  }
}
</style>
