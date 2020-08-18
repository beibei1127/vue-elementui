<template>
    <div class="mysideBar">
        <div class="logoImg">logo图标</div>
        <el-scrollbar wrap-class="scrollbar-wrap">
            <el-menu background-color="#3D3D5C" text-color="#fff" >
                <template v-for="item in routes" >
                    <!-- 第一层嵌套 -->
                    <el-submenu v-if="item.children&&item.children.length>0" :index="item.path">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span>{{item.meta.title}}</span>
                        </template>
                        <!-- 第二层嵌套 -->
                        <template v-for="it in item.children">
                            <el-submenu v-if=" it.children && it.children.length>0" >
                                <template slot="title">
                                    <i :class="it.meta.icon"></i>
                                    <span>{{it.meta.title}}</span>
                                </template>
                                <el-menu-item  @click="linkPath(itt.path)" v-for="itt in it.children" :index="itt.path" :key="itt.ptah">{{itt.meta.title}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else @click="linkPath(it.path)"  :index="it.path" :key="it.ptah">{{it.meta.title}}</el-menu-item>
                        
                        </template>
                        
                    </el-submenu>

                    <el-menu-item v-if="item.meta&&!item.children" @click="linkPath(item.path)" :index="item.path">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                iscollapse: false
            }
        },
        computed: {
            routes() {
                return this.$store.getters.permission_routes 
            },
           
        },
        created () {
        },
        methods: {
            linkPath(path) {
                console.log(this.$route)

                this.$router.push(path)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .mysideBar{
        height:100%;
        .logoImg{
            color:#fff;
            height:60px;
            line-height:60px;
            padding-left:20px;
            font-size: 14px;
            text-align: left;
        }
    }
    .scrollbar-wrap{
            overflow-x:hidden !important;
        }
</style>