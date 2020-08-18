<template>
    <div class="myBread">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadList" :key = "item.path">
                <!-- <span v-if="index==breadList.length-1">{{item.meta.title}}</span> -->
                <span>{{item.meta.title}}</span>
                <!-- <a v-else @click.prevent="handleClick(item.path)">{{item.meta.title}}</a> -->
            </el-breadcrumb-item>
            <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
            </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadList:[]
            }
        },
        methods: {
            handleClick(path) {
                this.$router.push(path)

            },
            routePath(){//路由变化时  获取新的路由信息给面包屑导航
                this.breadList = this.$route.matched.filter(item => item.meta&&item.meta.title)
            }
        },  
        watch:{
            '$route':'routePath'
        },
        created () {
            console.log(111)
            this.breadList = this.$route.matched.filter(item => item.meta&&item.meta.title)
            console.log(this.breadList,this.$route.matched)
        },
    }
</script>

<style lang="scss" scoped>

</style>