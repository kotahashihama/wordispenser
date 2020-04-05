<template>
  <div>{{ data }}</div>
</template>

<script>
export default {
  data: () => ({
    data: ''
  }),
  mounted() {
    this.$axios.$get('/api').then(res => {
      this.data = res;
    })
  }
}
</script>