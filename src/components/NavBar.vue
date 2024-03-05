<script>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
 
export default {

    emits: ['switch'],
    data() {
        return {
            activeButton: "hey",
            topOffset: 0,
              
        }
    },
    methods: {
        handleClick(buttonText) {
            this.activeButton = buttonText;
        
            this.$emit('switch', buttonText)
            const targetButton = this.$el.querySelector(`a[href="#${this.activeButton}"]`);
            this.topOffset = targetButton.offsetTop;

        },
    },

    mounted() {
        
        this.handleClick('hey');
        
    },

}


</script>


<template>
    
  <nav class="sidebar">
    <div class="nav-item" :class="{ active: activeButton === 'hey' }">
      <a href="#hey"    @click="handleClick('hey') "><span>Hey</span></a>
    </div>
    <div class="nav-item" :class="{ active: activeButton === 'me' }">
      <a href="#me" @click="handleClick('me') "><span>me</span></a>
    </div>
    <div class="nav-item" :class="{ active: activeButton === 'work' }">
      <a href="#work" @click="handleClick('work') "><span>work</span></a>
    </div>
    <div class="nav-item" :class="{ active: activeButton === 'us' }">
      <a href="#us" @click="handleClick('us') "> <span>us</span></a>
    </div>
    <div class="highlight-box" v-if="activeButton"  >
      <div class="highlight-content" :style="{ transform: 'translateY(' + this.topOffset + 'px)' }"  ></div>
        
    </div>
   
  </nav>

 

</template>
  
<style>



/*=====================*/
.sidebar {
  background-color: #ffffff04;
  border-right: white 1px solid;
  display: flex;
  flex-direction: column;
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
    color: #00ff15;
}

.highlight-box {
   
    position: absolute;
  
    width: 100%;
    height: 10vh;
    z-index: -1;
 }

.highlight-content {
  text-align: center;
  background-color: #ff010165;
  width: 100%;
  height: 100%;
  transition: 0.25s all;
}
/*=====================*/


nav{
    top: 0;
    left: 0;
    width: 8%;
    height: 100vh;
    background-color: brown;
    z-index: 1000;
    position: fixed;
}


 

@media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
}
</style>
  