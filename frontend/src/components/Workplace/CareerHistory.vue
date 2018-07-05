<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import RoleIcon from '@/components/Workplace/RoleIcon'

@Component({
  components: {
    RoleIcon
  }
})
export default class CareerHistory extends Vue {
  @Prop()
  roles

  get firstRole () {
    return this.roles[0]
  }

  get lastRole () {
    const last = this.roles.length - 1
    return this.roles[last]
  }
}
</script>

<template>
  <div class="history">
    <div class="history-start">
      {{firstRole.from}}
    </div>

    <ol class="history-items">
      <li v-for="(role, i) in roles" :key="i">
        <div class="history-icon">
          <role-icon :role="role.title" />
        </div>
        <div class="history-content">
          <div class="history-name">{{role.title}}</div>
          <div class="history-duration" v-if="roles.length > 1">
            {{role.from}} - {{role.to}}
          </div>
        </div>
      </li>
    </ol>

    <div class="history-end">
      {{lastRole.from}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.history {
  display: grid;
  min-height: 100%;
}

.history-start,
.history-end {
  opacity: 0.75;
  @include font-featured-primary ();
}

.history-items {
  list-style: none;
  padding: 0;
  position: relative;

  li {
    display: grid;
    margin: 1.5em 0;
    grid-template-columns: 4em calc(100% - 4em);

    > * {
      margin: auto 0;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 1.5em;
    top: 2em;
    transform: translateX(-1px);
    height: calc(100% - 4em);
    border-left: 2px dotted $color-azure;
    opacity: 0.8;
  }
}

.history-icon {
  width: 3em;
  height: 3em;
  background: $color-azure;
  display: block;
  border-radius: 50%;
  position: relative;

  img {
    width: 70%;
    @include pos-center ();
  }
}

.history-name {
  font-weight: bold;
}

.history-duration {
  opacity: 0.8;
}
</style>
