#!/bin/bash
CWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $CWD
DIR="$CWD/../../src/$1"

touch "$DIR/$2.vue"

echo "<template>
  <div class='$2'>
  </div>
</template>
<script>
export default {
  name: '$2'
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.$2 {}
</style>
" >> "$DIR/$2.vue"
