<template>
  <div class="alert-wrap">
    <div class="alert-content" v-show="show">
      <i class="fa fa-check white" v-show="type !== 'error'"></i>
      <i class="fa fa-exclamation-circle" v-show="type === 'error'"></i>
      <span v-html="msg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueAlert",

  data() {
    return {
      msg: '',
      type: '',
      show: false,
    }
  },

  methods: {
    notify(type, msg, timeout) {
      if(!type || !msg) {
        return
      }

      this.show = true
      if(msg.includes('.')) {
        msg = msg.replaceAll('.', '.<br/>')
      }
      this.msg = msg
      this.type = type

      setTimeout(() => {
        this.show = false
      }, timeout)
    }
  }
}
</script>

<style scoped>
.alert-wrap {
  position: fixed;
  z-index: 1000;
  top: calc(100vh / 2);
  left: 50%;
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  text-align: center;
}

.alert-content {
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
}

.alert-content + .alert-content {
  margin-top: 10px;
}

.alert-content i {
  position: relative;
  top: 1px;
  margin-right: 5px;
  color: #fff;
}

.alert-content span {
  color: #fff;
  line-height: 20px;
}

</style>
