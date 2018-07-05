<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import GitHubIcon from '@/assets/images/GitHub.svg'

@Component
export default class RoleIcon extends Vue {

  @Prop() role

  // The first icon acts as a default
  icons = [
    {
      roles: ['frontend'],
      src: GitHubIcon
    }
  ]

  get icon () {
    for (let icon of this.icons) {
      if (icon.roles.includes(this.role)) {
        return icon
      }
    }

    return this.icons[0]
  }
}
</script>

<template>
  <img :src="icon.src" :alt="role">
</template>

<style lang="scss" scoped>
</style>
