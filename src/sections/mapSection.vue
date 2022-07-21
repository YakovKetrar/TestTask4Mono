<template>
  <div class="map" id="map">

  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af6ef7a7a1231567d06f8ffa4a16d2e3dd5c596b657812a6c50743f4556bfbd59&amp;width=100%25&amp;&amp;lang=ru_RU&amp;scroll=true')
      document.getElementById("map").appendChild(recaptchaScript)
    },
    methods: {
    }
  }
</script>
<style>

</style>