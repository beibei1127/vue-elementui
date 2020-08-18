<template>
    <div class="login">
        <el-form ref="loginForm" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="form.pwd" type="password"></el-input>
            </el-form-item>
            <el-button @click="submitLogin">登录</el-button>
        </el-form>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name:'',
                    pwd:''
                },
                rules:{
                    name:[
                        {required:true,message:'用户名不能为空',trigger:'blur'}
                    ],
                    pwd:[
                        {required:true,message:'密码不能为空',trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            //登录
            submitLogin() {
                this.$store.dispatch('login',this.form).then(res =>{
                    // console.log(res)
                    this.$router.push('/')
                })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>