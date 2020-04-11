<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'App',
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
