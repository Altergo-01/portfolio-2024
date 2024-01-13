<script  >
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import ContentSwitch from './components/ContentSwitch.vue';
export default {
    components: {
      NavBar,
      ContentSwitch,
    },
    data() {
        return {
        }
    },
    methods: {
            
    },

}
</script>

<template>

  <NavBar></NavBar>
  <ContentSwitch></ContentSwitch>
   
</template>

<style scoped>

</style>
