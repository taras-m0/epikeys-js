<template>
    <div class="pagination">

        <div v-for="element in paginationElements" :class="element"></div>

    </div>
</template>

<script>
    export default {
        props: {
            count: Number
            , current: Number
        }

        , computed: {
            paginationElements: function () {
                const pagArray = [];
                for(let i=0; i < this.count; i++){
                    if( i == this.current ){
                        pagArray.push('current');
                    }else {
                        pagArray.push('element');
                    }
                }

                return pagArray;
            }
        }
    }

</script>

<style lang="scss">
    @import "./css/common";

    .pagination {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        // @include wrapper_center();
        width: 100%;
        max-width: $content_width;

        &>div{
            background-color: rgba(214, 92, 80, .5);
            height: 2em;
            margin: 4px;
            width: 0.3em;
            float: right;
            clear: right;
        }

        .current {
            background-color: #d65c50;
        }
    }

</style>