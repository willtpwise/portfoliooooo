<template>
  <span class='duration'>
    <time :datetime="from | dateComplete">{{from | date}}</time> -
    <time :datetime="to | dateComplete">{{to | date}}</time>
  </span>
</template>
<script>
export default {
  name: 'duration',

  props: ['from', 'to'],

  filters: {
    date (date) {
      if (date.toLowerCase() === 'present') {
        return date
      }

      let d = new Date(date)
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return months[d.getMonth()] + ', ' + d.getFullYear()
    },

    dateComplete (date) {
      let d = null
      if (date.toLowerCase() === 'present') {
        d = new Date()
      } else {
        d = new Date(date)
      }

      return d.toDateString()
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.duration {}
</style>
