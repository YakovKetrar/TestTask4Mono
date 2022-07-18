<template>
<div class="container">
   <div class="contacts__wrapper">
        <div class="contacts__info">
            <span class="contacts__info__tel">
                8 (903) 467 98 51
            </span>
            <span class="contacts__info__mail">
                info@monevac.ru
            </span>
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
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableName">
                            <input type="text" name="name" id="name" placeholder="Ваше имя"  v-model="name">
                        </lable>
                    </li>
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableTel">
                            <input type="text" name="tel" id="tel" placeholder="Ваше телефон"  v-model="tel">
                        </lable>
                    </li>
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableMsg" >
                            <textarea type="text" mame="msg" id="msg" placeholder="Ваше сообщение"  v-model="msg"></textarea>
                        </lable>
                    </li>
                    <li class="contacts__form__cheackbox">
                        <label for="1" @click="submitForm">
                            <input  type="checkbox" name="1" id="1"  v-model="status">
                            <span class="contacts__form__cheackbox_switch">Я подтверждаю свое согласие
                            с политикой в отношении </span>
                            <a href="">обработки персональных данных</a>
                        </label>
                    </li>
                </ul>
                <button class="contacts__form__button" @click="submitForm">
                    Задать вопросы?
                </button>
                 
                    <ul class="errors_list" v-if="errors.length">
                        <li class="errors_etem" v-for="error in errors" :key="error.id">{{ error }}</li>
                    </ul>
                  
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
            status: '',
            errors: [],
        }
    },
    methods: {
        submitForm() {
            this.errors = []
            this.dataForm = []
            this.dataForm.push(!this.name, !this.tel, !this.msg)
            console.log(this.dataForm)
            if (this.dataForm.includes(true)) {
                this.errors.push('заполните все поля');
            }
            if (!!this.tel && !this.validTel(this.tel)) {
                this.errors.push('Некорректный номер');
            }
            console.log(!this.status)
            if (!this.status) {
                this.errors.push('Требуется подтвердить согласие');
            }
            
        },
        validTel(tel) {
            var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            return re.test(tel);
        },
    },
    mounted() {
    }
}



</script>


<style>

</style>