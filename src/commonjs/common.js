export default Object.freeze({
    install(Vue) {
        Vue.prototype.notify = function (type, msg, timeout = 3000) {
            this.$root.$children[0].$refs.Alert.notify(type, msg, timeout)
        }
    }
})
