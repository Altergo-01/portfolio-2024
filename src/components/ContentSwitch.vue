<script>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import HeyComp1 from './ContentComps/HeyComp1.vue'
import HeyComp2 from './ContentComps/HeyComp2.vue'
import MeComp1 from './ContentComps/MeComp1.vue';
import MeComp2 from '@/components/ContentComps/MeComp2.vue'
import WorkComp1 from './ContentComps/WorkComp1.vue';
import WorkComp2 from './ContentComps/Workcomp2.vue'
import UsComp1 from './ContentComps/Uscomp1.vue'
import UsComp2 from './ContentComps/Uscomp2.vue'
export default {

    props: ['activeButton'],
    components: {
      HeyComp1,
      HeyComp2,
      MeComp1,
      MeComp2,
      WorkComp1,
      WorkComp2,
      UsComp1,
      UsComp2
    },
    data() {
        return {
          switch_class:'switch-set-1',
          tabComponent: {
            hey: ['HeyComp1','HeyComp2' ],
            me: ['MeComp1','MeComp2' ],
            work: ['WorkComp1','WorkComp2' ],
            us: ['UsComp1','UsComp2' ],

          },
        }
    },
    methods: {
        
    },
    mounted() {
      
       
  
    },

}


</script>


<template>
    <div id="pin-switch" class="container-switcher" :class="'switch-set-'+this.activeButton ">
      <article class="switchers content-1"> 
        <component :is="tabComponent[this.activeButton][0]"  ></component>
      </article>

      <article class="switchers content-2"> 
        <component :is="tabComponent[this.activeButton][1]"  ></component>
      </article>
    </div>
</template>
  
<style>


.container-switcher{
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s all;
}

.switchers{
  border: 3px black solid;
  transition: 0.5s all; 
}

/*==== CLASS SET ONE   ||  HEY || =======*/

.switch-set-hey{
   
}

.switch-set-hey article:nth-child(1){
  width: 50%;
  background-color: aqua;

}
.switch-set-hey article:nth-child(2){
  width: 25%;
  height: 60%;
  background-color: rgb(118, 250, 10);

}



/*==== CLASS SET TWO   ||  ME  || =======*/

.switch-set-me{
   
  }
  
  .switch-set-me article:nth-child(1){
    width: 20%;
    background-color: aqua;
  
  }
  .switch-set-me article:nth-child(2){
    width: 50%;
    height: 50%;
    background-color: rgb(118, 250, 10);
    transition: 0.5s;
  
  }

/*==== CLASS SET THREE || WORK || =======*/

.switch-set-work{
   
  }
  
  .switch-set-work article:nth-child(1){
    width: 70%;
    background-color: aqua;
  
  }
  .switch-set-work article:nth-child(2){
    width: 15%;
    height: 80%;
    background-color: rgb(118, 250, 10);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

/*==== CLASS SET FOUR  || US   || =======*/

.switch-set-us{
   
  }
  
  .switch-set-us article:nth-child(1){
    width: 50%;
    background-color: aqua;
  
  }
  .switch-set-us article:nth-child(2){
    width: 50%;
    height: 70%;
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
  