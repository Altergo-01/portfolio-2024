<script  >
 
import NavBar from './components/NavBar.vue';
import ContentSwitch from './components/ContentSwitch.vue';
export default {
    components: {
      NavBar,
      ContentSwitch,
    },
    data() {
        return {
          activeButton: null,
        }
    },
    methods: {

      handleSwitch(buttonText){
        this.activeButton = buttonText;
         console.log(this.activeButton, "AAAAAAAAAAAAAAAAAAAAH  ")
      }
            
    },

}
</script>

<template>

  <NavBar @switch="handleSwitch"></NavBar>
  <ContentSwitch :activeButton="this.activeButton"></ContentSwitch>
   
</template>

<style scoped>

</style>
