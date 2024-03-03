<script  >
import { gsap } from 'gsap';
import HeyComp from './components/HeyComp.vue';
import UsComp from './components/UsComp.vue';
import WorkComp from './components/WorkComp.vue';
import MeComp from './components/MeComp.vue';

export default {
    components: {
      
      HeyComp,
      UsComp,
      MeComp,
      WorkComp,
 

},
    data() {
        return {
          show: true,
          activeButton: "hey",
          topOffset: 0,
          tabComp: {
            hey: "HeyComp",
            Me: "MeComp",
            us: "UsComp",
            work: "WorkComp"
          },
          currentComp : 'HeyComp'
 
 
        }
    },
    methods: {



      handleClick(buttonText) {
 
            console.log( buttonText, this.tabComp[buttonText]  )
            this.currentComp =   this.tabComp[buttonText ]
            this.activeButton = buttonText
            console.log(buttonText, "salut")
            const targetButton = this.$refs[buttonText];
            this.topOffset = targetButton.offsetTop;
             
  
            //console.log(this.$refs.contentComp.$refs.HeyComp); Could be used later 
            //this.switchComponents() should be useless from now on
        },


      // switchComponents() {
    
      //   console.log(this.$refs.contentComp.$refs.MeComp);
      //    const component1 = this.$refs.component1;
      //    const component2 = this.$refs.component2;

      //    // Capture initial and final state
      //    const initialState = {
      //      div1Width: window.getComputedStyle(component1.$refs.div1).width,
      //      div2Width: window.getComputedStyle(component1.$refs.div2).width
      //    };
      //    const finalState = {
      //      div1Width: window.getComputedStyle(component2.$refs.div1).width,
      //      div2Width: window.getComputedStyle(component2.$refs.div2).width
      //    };

      //    // Apply inverse transformations
      //    gsap.set('.div1', { width: initialState.div1Width });
      //    gsap.set('.div2', { width: initialState.div2Width });

      //    // Animate to final state
      //    gsap.to('.div1', { duration: 1, width: finalState.div1Width });
      //    gsap.to('.div2', { duration: 1, width: finalState.div2Width });

 
      // },

    },

    mounted() {
       
      this.handleClick('hey');
      
    } 

}
</script>

<template>

 

  <nav class="sidebar">
    <div class="nav-item" :class="{ active: activeButton === 'hey' }">
      <a href="#hey" @click="handleClick('hey') " ref="hey"><span>Hey</span></a>  
    </div>

    <div class="nav-item" :class="{ active: activeButton === 'me' }">
      <a href="#me" @click="handleClick('me') " ref="me"><span>Me</span></a> 
    </div>

    <div class="nav-item" :class="{ active: activeButton === 'work' }">
      <a href="#work" @click="handleClick('work') " ref="work"><span>Work</span></a> 
    </div>

    <div class="nav-item" :class="{ active: activeButton === 'us' }">
       <a href="#us" @click="handleClick('us') " ref="us"><span>Us</span></a> 
    </div>

    <div class="highlight-box" v-if="activeButton">
      <div class="highlight-content" :style="{ transform: 'translateY(' + this.topOffset + 'px)' }"></div>
    </div>
</nav>
  <!-- <transition  > 
    <router-view v-if="show"></router-view>
  </transition> -->

  <transition  > 
     <component :is="this.currentComp"></component>
  </transition>
</template>

<style scoped>

 

  
 

/*========== transition ===========*/


.v-enter-active{
  transition: all 1s ease;
}
.v-leave-active {
  transition: all  0.2s ease;
}

.v-enter-from{
  transform: translateY(10vh);
  opacity: 0;
}
.v-leave-to {
  transform: translateY(10vh);
  opacity: 0;
}

 
 
 

/*=====================*/
.sidebar {
  background-color: #ffffff04;
  border-right: rgba(255, 255, 255, 0.205) 1px solid;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.nav-item {
    width: 100%; 
    height: 10vh; 

 
 
}

.nav-item a {
    text-decoration: none;
    display: flex;
    color: #000;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.nav-item a span{
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 100;
}

.highlight-box {
   
    position: absolute;
  
    width: 100%;
    height: 10vh;
    z-index: -1;
    top: 0;
 }

.highlight-content {
  text-align: center;
  background-color: #ffffff21;
  width: 100%;
  height: 100%;
  transition: 0.45s all;
}
/*=====================*/


nav{
    top: 0;
    left: 0;
    width: 6%;
    height: 100vh;
     
    z-index: 1000;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}

 
 
</style>
