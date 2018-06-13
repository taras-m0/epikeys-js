<template>
    <div class="slider">
        <Slide :background_img="currentSlide.background_img"
               :text="currentSlide.text"
               :title="currentSlide.title"
               :buttons="currentSlide.buttons"
        >

        </Slide>

        <Pagination :current="currentSlideNum" :count="slidersLength">

        </Pagination>
    </div>
</template>

<script>
    import Slide from './slide';
    import Pagination from './pagination';
    import 'whatwg-fetch';

    export default {
        components: { Slide, Pagination }
        , data(){
            return {
                currentSlideNum: 0

                , slides: [
                    {
                        background_img: 'assets/images/slide1.png'
                        , title: "Победим в боевом кубке"
                        , text: "<p>AnyLVL - профессиональная помощь в играх</p>" +
                        "<p>Долгожданное открытие раздела CS:GO, еперь Вы можете купить аккаунт CS:GO и на нашем сайте!</p>"
                        , buttons: [
                            'Подробне'
                        ]
                    }
                ]
            }
        }

        , computed: {
            currentSlide: function(){
                return this.slides[this.currentSlideNum];
            }

            , slidersLength: function () {
                return this.slides.length;
            }
        }
        , created: function () {
            const self = this;

            fetch('/sliders.json')
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log('parsed json', json);
                    self.slides = json;
                    return json;
                }).then(function (json) {
                    setInterval(() => {
                        self.currentSlideNum = self.currentSlideNum + 1 >= self.slides.length ? 0 : self.currentSlideNum + 1;
                    }, 5000);
                }).catch(function (ex) {
                    console.log('parsing failed', ex)
                });
        }
    }

</script>

<style lang="scss">
    .slider {
        height: 100%;
    }
</style>