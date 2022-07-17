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
            <form>
                <span>Остались вопросы?</span>
                <ul class="contacts__form__list">
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableName">
                            <input type="text" name="tel" id="tel" placeholder="Ваше имя">
                        </lable>
                    </li>
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableTel">
                            <input type="text" name="tel" id="tel" placeholder="Ваше телефон">
                        </lable>
                    </li>
                    <li class="contacts__form__input">
                        <lable class="contacts__form__lableMsg">
                            <textarea type="text" mame="msg" id="msg" placeholder="Ваше сообщение"></textarea>
                        </lable>
                    </li>
                    <li class="contacts__form__cheackbox">
                        <label for="1">
                            <input  type="checkbox" name="1" id="1" >
                            <span class="contacts__form__cheackbox_switch">Я подтверждаю свое согласие
                            с политикой в отношении </span>
                            <a href="">обработки персональных данных</a>
                        </label>
                    </li>
                </ul>
                <button class="contacts__form__button">
                    Задать вопрос
                </button>
            </form>
        </div>
   </div>
</div>
</template>

<script>
</script>


<style>

</style>