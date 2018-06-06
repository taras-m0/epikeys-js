import './css/style.scss';
import Vue from 'vue/dist/vue';

import Slider from './slider.vue';
const slider = new Vue({
    el: "#slider",
    render: (h) => h( Slider)
});