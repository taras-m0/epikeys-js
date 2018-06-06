<template>
    <div class="slide" v-bind:style="{ 'backgroundImage': 'url( ' + background_img + ')' }">

        <div class="wrapper">
            <h1>{{ title }}</h1>

            <div v-html="text" class="text"></div>

            <button v-for="button in buttons">{{ button }}</button>
        </div>

    </div>

</template>

<script>
    export default {
        props: {
            title: String
            , text: String
            , background_img: String
            , buttons: Array
        }
    }
</script>

<style lang="scss">
    @import "./css/common";

    .slide {
        height: 100%;
        width: 100%;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        .wrapper {
            @include wrapper_center;
            top: 50%;
            position: relative;
            transform: translateY(-50%);
            padding-right: 30%;

            h1 {
                text-transform: uppercase;
                font-size: 3em;
            }

            .text {
                padding-right: 20%;
            }

            button {
                display: inline-block;
                padding: 1em 2em;
                text-transform: uppercase;
                font-size: 1.5em;
                margin: 1em;
                background: linear-gradient(-45deg, #d65c50 , #e09e00 );
                color: inherit;
                border: none;
            }
        }

    }
</style>