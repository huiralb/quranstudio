<template>
  <section class="section">
    <h3>Qori</h3>
  </section>
</template>

<script>
import quran from "~/api/quran.js"

export default {
  beforeRouteEnter(to, from, next) {
    quran.recitations().then(data => {
      next(vm => (vm.recitations = data.recitations))
    })
  },
  data() {
    return {
      recitations: null
    }
  }
}
</script>

