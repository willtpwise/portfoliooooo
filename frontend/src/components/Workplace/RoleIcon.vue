<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import PaintIcon from '@/assets/images/Paint.svg'
import PaintBrushIcon from '@/assets/images/PaintBrush.svg'
import CodeIcon from '@/assets/images/Code.svg'
import ChalkboardIcon from '@/assets/images/Chalkboard.svg'

@Component
export default class RoleIcon extends Vue {

  @Prop() role

  // The first icon acts as a default
  icons = [
    {
      roles: ['front end tech lead'],
      src: PaintIcon
    },
    {
      roles: ['front end developer'],
      src: PaintBrushIcon
    },
    {
      roles: ['software engineer'],
      src: CodeIcon
    },
    {
      roles: ['lead web developer'],
      src: ChalkboardIcon
    }
  ]

  get icon () {
    const role = this.role.toLowerCase()
    for (let icon of this.icons) {
      if (icon.roles.includes(role)) {
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
