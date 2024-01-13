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
            this.animateHighlight();
            this.$emit('switch', buttonText)
      

        },
  
        animateHighlight() {
            const highlightBox = this.$el.querySelector('.highlight-box');
            const highlightContent = highlightBox.querySelector('.highlight-content');

            const targetButton = this.$el.querySelector(`a[href="#${this.activeButton}"]`);
            const targetButtonTop = targetButton.offsetTop;
            console.log(targetButton, "le bouton cliqué /// ", targetButtonTop, "la distance du top.")
            

            highlightContent.style.transition = `transform 0.4s ease-in-out`;

            highlightContent.style.transform = `translateY(${targetButtonTop }px)`;

            this.topOffset = targetButtonTop;
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
    <div class="highlight-box" v-if="activeButton">
      <div class="highlight-content">
        
    </div>
    </div>
  </nav>
</template>
  
<style>



/*=====================*/
.sidebar {
  background-color: #f2f2f2;
   
  display: flex;
  flex-direction: column;
}

.nav-item {
    width: 100%; 
    height: 10vh; 
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
 
 
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
    color: #ff0101;
}

.highlight-box {
   
    position: absolute;
     
    width: 100%;
    height: 10vh;
    z-index: -1;
}

.highlight-content {
  text-align: center;
  background-color: #ff0101;
  width: 100%;
  height: 100%;
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



.highlight-content{
    background-color: rgba(127, 255, 212, 0.486);
}

@media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
}
</style>
  