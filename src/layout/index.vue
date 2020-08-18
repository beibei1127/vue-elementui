<template>
    <div class="myManage">
        <!-- 左侧导航栏 -->
        <side-bar class="sidebar-container"></side-bar>
        <!-- 整体右侧 -->
        <div class="right-container">
            <!-- 头部导航 -->
            <div class="fixeHeader">
                <!-- 头部 面包屑 -->
                <nav-bar></nav-bar>
                <!-- 头部 标签 -->
                <tab-pane></tab-pane>
            </div>
            <!-- 主页内容 -->
            <app-main></app-main>
        </div>
        
    </div>
</template>

<script>
import sideBar from './components/sideBar.vue';
import navBar from './components/navbar.vue';
import tabPane from './components/tabPane.vue';
import appMain from './components/appmain.vue';

    export default {
        data() {
            return {
                
            }
        },
        components: {
            sideBar,
            navBar,
            tabPane,
            appMain
        },
        created () {
            console.log(this.$route)
        },
    }
</script>

<style lang="scss" scoped>
 
</style>