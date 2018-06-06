<template>
    <div class="slider">
        <Slide :background_img="currentSlide.background_img"
               :text="currentSlide.text"
               :title="currentSlide.title"
               :buttons="currentSlide.buttons"
        >

        </Slide>

        <Pagination>

        </Pagination>
    </div>
</template>

<script>
    import Slide from './slide';
    import Pagination from './pagination';

    export default {
        components: { Slide, Pagination }
        , data(){
            return {
                currentSlide: {
                    background_img: 'assets/images/slide1.png'
                    , title: "Победим в боевом кубке"
                    , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                    "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                    , buttons: [
                        'Подробне'
                    ]
                }
            }
        }
    }

</script>

<style lang="scss">
    .slider {
        height: 100%;
    }
</style>