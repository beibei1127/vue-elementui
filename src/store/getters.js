const getters = {
    roles:state => state.user.roles,
    permission_routes:state => state.permission.routes,
    iscollapse:state => state.user.iscollapse,
}
export default getters