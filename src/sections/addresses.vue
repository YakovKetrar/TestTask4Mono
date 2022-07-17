<template>
<div class="container addresses">
  <ul class="addresses__list">
    <li  class="addresses__item" v-for="address in addressesData" :key="address.id" v-bind:class="{ doubleBox: address.doubleBox}">
      <div>
      <h3 class="addresses__city" v-html="address.city"></h3>
      <div class="addresses__contacts" v-html="Object.values(address.contacts).join('<br>')"></div>
      <div class="addresses__address" v-html="address.address"></div>
      <a class="addresses__openMap">проложить маршрут</a>
      </div>
      <div class="addresses__workTime" >Режим работы: c {{address.worktimeFrom}} до {{address.worktimeTil}}</div>
    </li>
  </ul> 
  
</div>
</template>
<script>
import addressesData from '../data/addresses'
export default {
    data: function () {
      return {
        addressesData
      }
    },
}
</script>

<style>

</style>