<template>
  <div class="footer__background">
    <div class="container footer">
        <div class="footer__wrapper">
            <div class="footer__products-and-information">
                <ul class="footer__products">
                    <li class="footer__products__item"  v-for="product in productList" :key="product.id">
                        <a class="footer__products__link" :href="product.href">{{product.name}}</a>
                    </li>
                </ul>
                <ul class="footer__information">
                    <li class="footer__information__item"  v-for="item in informationalList" :key="item.id">
                        <a class="footer__information__link" :href="item.href">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="footer__contacts-and-address">
                <div class="footer__contacts">
                    <div class="footer__contacts__tel" v-html="Object.values(addressesData[0].contacts).join('<br>')"></div>
                    <button class="footer__contacts__backCall">обратный звонок</button>
                    <a class="footer__contacts__email" :href="`mailto:info@monevac.ru`">info@monevac.ru</a>
                    <div class="footer__contacts__address" v-html="addressesData[0].address"></div>
                </div>
            </div>
        </div>
        <div class="footer__developer">
            <div class="footer__developer__name">
                © Моневак 2020 | Все права защищены
            </div>
            <div class="footer__developer__link">
                Разработка и продвижение сайта - <a href="">TODO</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import productList from '../data/products'
import informationalList from '../data/information'
import addressesData from '../data/addresses'
export default {
    data: function () {
      return {
        productList,
        informationalList,
        addressesData
      }
    },
}
</script>

<style>

</style>