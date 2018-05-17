<template>
	<div class="section">
		<div class="columns is-mobile">
			<b-table v-if="chapters" :data="chapters" :columns="columns"></b-table>
		</div>
	</div>
</template>

<script>
import BLogo from "@/components/Logo"
import quran from "~/api/quran"

export default {
  name: "HomePage",
  components: { BLogo },
  beforeRouteEnter(to, from, next) {
    quran.chapters().then(data => {
      console.log(data.chapters)
      next(vm => {
        vm.chapters = data.chapters
      })
    })
  },
  data() {
    return {
      chapters: null,
      columns: [
        {
          field: "chapter_number",
          label: "NO"
        },
        {
          field: "name_simple",
          label: "Surat"
        },
        {
          field: "name_arabic",
          label: "Surat"
        },
        {
          field: "verses_count",
          label: "Jumlah Ayat"
        }
      ]
    }
  }
}
</script>

