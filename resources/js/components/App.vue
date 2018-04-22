<template>
  <div>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import MyFooter from './MyFooter.vue'
  export default {
    data() {
      return {}
    },
    components: {
      MyFooter
    }
  }
</script>
