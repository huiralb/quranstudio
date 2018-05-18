<template>
  <section class="section">
    <ul>
      <li v-for="(verse, i) in verses" :key="i">
        {{ verse.text_indopak }}
      </li>
    </ul>
  </section>
</template>

<script>
import quran from "~/api/quran"

export default {
  beforeRouteEnter(to, from, next) {
    let id = to.params.chapter_id
    quran.verses(id).then(data => {
      console.log(data)
      next(vm => {
        vm.verses = data.verses
        vm.meta = data.meta
      })
    })
  },

  data() {
    return {
      verses: null,
      meta: null
    }
  }
}
</script>

