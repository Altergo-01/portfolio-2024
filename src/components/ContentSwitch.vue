<script>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";


export default {

    props: ['activeButton'],
    data() {
        return {
          switch_class:'switch-set-1',
          activeB : this.activeButton,
        }
    },
    methods: {
        
    },
    mounted() {
      
       
  
    },

}


</script>


<template>
    <div id="pin-switch" class="container-switcher" :class="switch_class">
      <div class="switchers content-1">{{ this.activeButton }}</div>
      <div class="switchers content-2">CONTENT 2</div>
    </div>
</template>
  
<style>


.container-switcher{
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.switchers{
  border: 3px black solid;
}

/*==== CLASS SET ONE   ||  HEY || =======*/

.switch-set-1{
   
}

.switch-set-1 :nth-child(1){
  width: 50%;
  background-color: aqua;

}
.switch-set-1 :nth-child(2){
  width: 25%;
  background-color: rgb(118, 250, 10);

}



/*==== CLASS SET TWO   ||  ME  || =======*/

.switch-set-2{
   
  }
  
  .switch-set-2 :nth-child(1){
    width: 20%;
    background-color: aqua;
  
  }
  .switch-set-2 :nth-child(2){
    width: 50%;
    background-color: rgb(118, 250, 10);
  
  }

/*==== CLASS SET THREE || WORK || =======*/

.switch-set-3{
   
  }
  
  .switch-set-3 :nth-child(1){
    width: 70%;
    background-color: aqua;
  
  }
  .switch-set-3 :nth-child(2){
    width: 15%;
    background-color: rgb(118, 250, 10);
  
  }

/*==== CLASS SET FOUR  || US   || =======*/

.switch-set-4{
   
  }
  
  .switch-set-4 :nth-child(1){
    width: 50%;
    background-color: aqua;
  
  }
  .switch-set-4 :nth-child(2){
    width: 50%;
    background-color: rgb(118, 250, 10);
  
  }








@media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
}
</style>
  