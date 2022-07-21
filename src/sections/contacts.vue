<template>
<div class="container">
   <div class="contacts__wrapper">
        <div class="contacts__info">
            <a class="contacts__info__tel" href="tel:89034679851">
                8 (903) 467 98 51
            </a>
            <a class="contacts__info__mail" href="mailto:info@monevac.ru">
                info@monevac.ru
            </a>
            <span class="contacts__info__firmName">
                Полное наименование:<br>Общество с ограниченной ответственностью «МОНЕВАК»  <br>                                      Сокращенное наименование: ООО «МОНЕВАК»
            </span>
            <span class="contacts__info__firmData">
                ИНН: 3448050610<br>
                КПП: 344801001<br>
                ОКПО: 67354285<br>
                ОКАТО: 18401000000<br>
                ОГРН: 1103461002480<br>
                Код по ОКВЭД: 51.70
            </span>
            <span class="contacts__info__firmData">
                Банк: Филиала «Ростовский» ОАО <br>  «Альфа-Банк» г Ростов на Дону<br>
                БИК: 046015207<br>
                к/с: 30101810500000000207<br>
                р/с: 40702810926090000003
            </span>
            <span class="contacts__info__firmData">
                Юридический адрес: 400080, Волгоградская обл. г. Волгоград<br>                               ул. Командира Рудь,14А, офис 13<br>
                Почтовый адрес: 400080, Волгоградская обл. г. Волгоградъ<br> ул. Командира Рудь, 14А, офис 13
            </span>
        </div>
        <div class="contacts__form">
            <form @submit.prevent>
                <span>Остались вопросы?</span>
                <ul class="contacts__form__list">
                    <li class="contacts__form__etem">
                        <lable class="contacts__form__lableName">
                            <input type="text" name="name" id="name" placeholder=" " @keydown ="tappingCheсk" v-model="name" :class="{inputError: status.name}">
                            <span class="contacts__form__placeholder">Ваше имя</span>
                            <span class="contacts__form__error-msg" v-if="status.name">Является обязательным полем</span>
                        </lable>
                    </li>
                    <li class="contacts__form__etem">
                        <lable class="contacts__form__lableTel">
                            <input type="text" name="tel" id="tel" placeholder=" " @keydown ="tappingCheсk" v-model="tel" :class="{inputError: status.tel}">
                            <span class="contacts__form__placeholder">Ваш телефон</span>
                            <span class="contacts__form__error-msg" v-if="status.tel">Является обязательным полем</span>
                        </lable>
                    </li>
                    <li class="contacts__form__etem">
                        <lable class="contacts__form__lableMsg" >
                            <textarea type="text" mame="msg" id="msg" placeholder=" "  v-model="msg" @keydown ="tappingCheсk" :class="{inputError: status.msg}"></textarea>
                            <span class="contacts__form__placeholder">Вашe сообщение</span>
                            <span class="contacts__form__error-msg" v-if="status.msg">Является обязательным полем</span>
                        </lable>
                    </li>
                    <li class="contacts__form__cheackbox">
                        <label for="1">
                            <input  type="checkbox" name="1" id="1"   v-model="cb">
                            <span class="contacts__form__cheackbox__switch">Я подтверждаю свое согласие
                            с политикой в отношении </span>
                            <a href="">обработки персональных данных</a>
                        </label>
                        <span class="contacts__form__error-msg_cb contacts__form__error-msg" v-if="status.cb">Нужно подтвердить согласие</span>
                    </li>
                </ul>
                <button class="contacts__form__button" @click="submitForm">
                    Задать вопросы?
                </button>      
            </form>
        </div>
   </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            name: '',
            tel: '',
            msg: '',
            cb: '',
            status: {
                name: false,
                tel: false,
                msg: false,
                cb: false
            },
        }
    },
    methods: {
        submitForm() {
            !this.name === true ? this.status.name = true : false ;
            !this.tel === true ? this.status.tel = true : false ;
            !this.msg === true ? this.status.msg = true : false ;
            !this.cb === true ? this.status.cb = true : false ;
            
        },
        tappingCheсk() {
            this.status.name === true ? this.status.name = !this.name : false ;
            this.status.tel === true ? this.status.tel = !this.tel : false ;
            this.status.msg === true ? this.status.msg = !this.msg : false ;
            this.status.cb === true ? this.status.cb = !this.status : false ;
        }

    },
    mounted() {
    }
}



</script>


<style>

</style>