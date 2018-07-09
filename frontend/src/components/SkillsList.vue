<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SkillsList extends Vue {
  @Prop() items
}
</script>

<template>
  <ul class="skills-grid">
    <li class="skills-item" v-for="skill in items" :key="skill.name">

      <i v-if="skill.icon" :class="skill.icon" class="skills-icon"></i>

      <img v-if="skill.img" :src="skill.img" class="skills-icon">

      <span class="skills-title">{{skill.name}}</span>

    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.skills-grid {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 20% [col-start]);
}

.skills-item {
  margin: auto;
  padding: 20px;
  text-align: center;

  img {
    width: 48px;
    height: 48px;
  }
}

.skills-icon {
  font-size: 3em;
}

.skills-title {
  display: block;
  margin-top: 0.5em;
  @include font-featured-primary ();
  font-size: 1.2em;
  word-wrap: break-word;
  hyphens: auto;
}

@media screen and (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 33.333% [col-start]);
  }
}

@media screen and (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(2, 50% [col-start]);
  }

  .skills-item {
    padding: 10px;
  }
}
</style>
