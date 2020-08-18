<template>
<!-- :src="isFullsscreen? exitFullscreen:'@/assets/full.png'" -->
    <div class="imgfull">
        <img v-if="!isFullsscreen" src="@/assets/full.png"  @click="handleFullscreen"/>
        <img v-if="isFullsscreen" src="@/assets/exit-full.png"  @click="handleFullscreen"/>
    </div>
</template>

<script>
import screenfull from 'screenfull';
    export default {
        data() {
            return {
                //默认不全屏
                isFullsscreen: false,
                exitFullscreen:'../../styles/img/exit-full.png',
                fullscreen:'@/assets/full.png'
            }
        },
        mounted () {
            this.init();
        },
        beforeDestroy(){
            this.destroy()
        },
        methods: {
            handleFullscreen() {
                //如果不允许进入全屏  发出不允许提示 浏览器不能全屏
                if(!screenfull.isEnabled){
                    this.$message({
                        message:'你的浏览器不支持全屏展示',
                        type:'warning'
                    })
                    return false
                    
                }
                //全屏的触发
                    screenfull.toggle()
            },
            //监听change事件
            change(){
                this.isFullsscreen = screenfull.isFullscreen
            },
            init(){
                //on  off 监听浏览器是否全屏状态
                if(screenfull.isEnabled){
                    screenfull.on('change',this.change)
                }
            },
            destroy(){
                if(screenfull.isEnabled){
                    screenfull.off('change',this.change)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .imgfull{
        img{
            display: inline-block;
            width:20px;
            height:20px;
            vertical-align: middle;
            cursor: pointer;
        }
    }
</style>