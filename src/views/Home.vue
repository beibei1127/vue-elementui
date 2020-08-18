<template>
  <div class="home">
    <el-button type="primary" @click="linkN">Admin</el-button>
    <el-button type="warning" @click="linkY">Yunwei</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    linkN() {
      this.$router.push('/admin/nihao')
      
    },
    linkY() {
      this.$router.push('/yunwei')
      
    }
  },
}
</script>
