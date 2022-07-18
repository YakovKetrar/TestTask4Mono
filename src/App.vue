<template>
  <div>
    <header>
      <top/>
    </header>
    <contacts/>
    <mapSection/>
    <addresses/>
    <footer>
      <bottom/>
    </footer>
  </div>

</template>

<script>
import top from "./sections/top.vue";
import addresses from "./sections/addresses.vue";
import bottom from "./sections/bottom.vue";
import contacts from "./sections/contacts.vue";
import mapSection from "./sections/mapSection.vue";

export default {
    components: {
        top,
        addresses,
        bottom,
        contacts,
        mapSection
    }
}
</script>


<style lang="scss">
 @import './assets/sass/main.scss';
</style>
