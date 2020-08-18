import {getToken, setToken, removeToken } from '@/utils/auth'

export default {
    state:{
        token:getToken() || '',
        roles:[],
    },
    mutations:{
        SET_TOKEN:(state,token) => {
            state.token = token
        },
        ROLES:(state,roles) => {
            state.roles = roles
            sessionStorage.setItem('roles',roles)
        },
        
    },
    actions:{
        //登录
        login({commit},userinfo){
            const {name,pwd} =userinfo
            
            // let roles = ['admin','yunwei']
                let token = 'admin'
            return new Promise((resolve,reject) => {
                
                // login({name:name.trim(),pwd:pwd}).then(res => {
                //     const {data} = res
                //     commit('SET_TOKEN',data.token)
                //     setToken(data.token)
                //     resolve()
                // }).catch(err=>{
                //     reject(err)
                // })
                setTimeout(()=>{
                    commit('SET_TOKEN',token)
                    setToken(token)
                    resolve()
                },100)
                
            })
        },
        getuser({commit}){
            // const {name,pwd} =userinfo
            // let roles = ['admin','yunwei']
                let token = 'admin'
            return new Promise((resolve,reject) => {
                
                // login({name:name.trim(),pwd:pwd}).then(res => {
                //     const {data} = res
                //     commit('SET_TOKEN',data.token)
                //     setToken(data.token)
                //     resolve()
                // }).catch(err=>{
                //     reject(err)
                // })
                // if(!flag){
                //     flag=true
                // }else{
                    
                // }
                
                setTimeout(()=>{
                    const data = {
                        'roles':['yunwei','admin'],
                        'token':token
                    }
                    
                    commit('ROLES',data.roles)
                    resolve(data)
                },100)
                
            })
        },
        //获取用户信息
        // getInfo({ commit, state }) {
        //     return new Promise((resolve, reject) => {
        //       getInfo(state.token).then(response => {
        //         const { data } = response
        //         if (!data) {
        //           reject('获取失败，请重新登录')
        //         }
        //         const { roles, name, avatar, introduction } = data
        //         // roles must be a non-empty array
        //         if (!roles || roles.length <= 0) {
        //           reject('请返回权限信息')
        //         }
        //         commit('SET_ROLES', roles)
        //         commit('SET_NAME', name)
        //         commit('SET_AVATAR', avatar)
        //         commit('SET_INTRODUCTION', introduction)
        //         resolve(data)
        //       }).catch(error => {
        //         reject(error)
        //       })
        //     })
        //   },
    }
}