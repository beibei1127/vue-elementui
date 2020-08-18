<template>
    <div class="myNavbar">
        <div @click="expand" class="myIcon">
            <i :class="icon"></i>
        </div>
        <bread-crumb class="myBreadcrumb"></bread-crumb>
        <screen-full class="myScreenfull"></screen-full>
    </div>
</template>

<script>
import breadCrumb from '@/components/Breadcrumb.vue';
import screenFull from './screenfull.vue';
    export default {
        data() {
            return {
                icon: 'el-icon-s-unfold'
            }
        },
        components: {
            breadCrumb,
            screenFull
        },
        computed: {
           
        },
        methods: {
            expand() {
                const a = document.getElementsByClassName('right-container')[0]
                if(this.icon == 'el-icon-s-unfold'){
                    this.icon = 'el-icon-s-fold'
                    a.style.left='40px';
                    a.style.width="calc(100% - 40px)"
                }else{
                    this.icon = 'el-icon-s-unfold'
                    a.style.left='200px';
                    a.style.width="calc(100% - 200px)"
                }
                
                 
            }
        },
    }
</script>

<style lang="scss" scoped>
    .myNavbar{
        text-align: left;;
        .myIcon{
            text-align: left;
            cursor: pointer;
            width:24px;
            height:24px;
            display: inline-block;
            vertical-align: middle;
            i{
                font-size: 24px;
                
            }
        }
        .myBreadcrumb{
            display: inline-block;
            margin-left:10px;
            vertical-align: middle;
        }
        .myScreenfull{
            float:right;
            
        }
    }
</style>