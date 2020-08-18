<template>
    <div>
        <el-tabs v-model="isTabvalue" @tab-click="linkPath" type="card" closable  @tab-remove="removeTab">
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.path"
                :label="item.title"
                :name="item.title"
            ></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isTabvalue:'',
                editableTabs: [
                   {
                       title:'首页',
                       path:'/'
                   }
                ]
            }
        },
        watch:{
            '$route':'routePath'
        },
        methods: {
            linkPath(e){
                let p = ''
                // this.$router.push(this.$route.path)
                this.editableTabs.forEach(el =>{
                    if(el.title == e.name){
                        p = el.path
                    }
                })
                this.$router.push(p)
            },
            routePath(){
              let flag =  this.editableTabs.some((el,index)=>{
                    return el.path.indexOf(this.$route.path)>-1
                })
                if(!flag){
                    this.editableTabs.push({
                        title:this.$route.meta.title,
                        path:this.$route.path
                    })
                    
                }
                this.isTabvalue = this.$route.meta.title
            },
            removeTab(name) {
               this.editableTabs =  this.editableTabs.filter(el => {
                   return name != el.title
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>