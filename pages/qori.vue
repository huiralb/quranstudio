<template>
  <section class="section" id="qori">
    <h3>Qori</h3>
  </section>
</template>

<script>
import Quran from "~/api/quran.js";

export default {
  created(){
    let quran = new Quran()
    console.log(quran.recitations())
  }
}
</script>

