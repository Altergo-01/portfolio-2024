<script>

//import workItem from '../assets/others/workItem.svg'

export default {

     
    components: {

    },
    data() {
        return {
 
        }
    },
    methods: {
        test(){
            console.log("yes")
        },

        runAnimation() {

          this.$refs.boxLanguage.classList.add('rotate-animation');

        }
    },
    mounted() {
      
       
  
    },

}


</script>


<template>
     <div id="pin-switch" class="container-switcher" :class="'switch-set-work' ">
      <article class="switchers content-1 div1"> 
        heeeyyy
      </article>

      <article class="switchers content-2 div2"> 
          <div class="drop_container">
                <div class="main_item drop_item">
                    <div class="box-language" ref="boxLanguage" @click="runAnimation">

                    </div>
 
                </div>
             
                 <svg v-for="(item, index) in 5" :key="index" @click="test()" id="workSvg" width="98" height="107" viewBox="0 0 98 107" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 
                    <path d="M49.3763 7.32925L55.3519 0.5H61.25H73.5H97.5V96.5149H73.5H61.25H55.3516L49.3759 89.7002L49 89.2715L48.6241 89.7002L42.6484 96.5149H36.75H24.5H0.5V0.5H24.5H36.75H42.6481L48.6237 7.32925L49 7.7593L49.3763 7.32925Z" stroke="url(#paint0_linear_1831_47)" fill="url(#img1)" />
                    <path id="hoverCover" d="M49.3763 7.32925L55.3519 0.5H61.25H73.5H97.5V96.5149H73.5H61.25H55.3516L49.3759 89.7002L49 89.2715L48.6241 89.7002L42.6484 96.5149H36.75H24.5H0.5V0.5H24.5H36.75H42.6481L48.6237 7.32925L49 7.7593L49.3763 7.32925Z"  fill="#000000" />
                    <text x="0" y="50" font-family="Arial" font-size="20" fill="white"  style="user-select: none;">Hello, SVG!</text>
                    <path id="myPath" d="M49 96L54 101.5L49 107L44 101.5L49 96Z" fill="#D9D9D9"/>
                    <defs>
                        <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href="../assets/project_wallpaper/squareTest.png" x="-40" y="0" width="180" height="180"/>
                        </pattern>
                        <linearGradient id="paint0_linear_1831_47" x1="49" y1="0.000214746" x2="49" y2="97.0152" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8FAD39" stop-opacity="0"/>
                            <stop offset="0.824591" stop-color="white"/>
                        </linearGradient>
                    </defs>
                </svg> 



                <!-- <div class="project_item drop_item"></div>
                <div class="project_item drop_item"></div>
                <div class="project_item drop_item"></div>
                <div class="project_item drop_item"></div>
                <div class="project_item drop_item"></div> -->
            </div>
      </article>
    </div>


</template>
  
<style>


 text{
    transform: translate(0, 40px);
    opacity: 0;
    transition: all 0.5s;
 
}
 
#workSvg:hover text{
    transform: translate(0,  0px);
    opacity: 1;
}


  #myPath:hover {
    /*animation: rotate 3s linear infinite;
    transform-origin: center;*/
  }

   

  #hoverCover{
    opacity: 0;
    transition: all 0.5s;
  }
  #workSvg:hover #hoverCover {
    opacity: 0.3;
  }
/*==== CLASS SET THREE || WORK || =======*/

.switch-set-work{
   
}

.switch-set-work article:nth-child(1){
  width: 70%;
  height: max-content;
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

.box-language{
    height: 12vh;
    width: 12vh;
    transition: 0.3s;
    clip-path: polygon(45% 0, 55% 0, 100% 45%, 100% 55%, 55% 100%, 45% 100%, 0 55%, 0 45%);
    
}
.box-language::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(/src/assets/project_wallpaper/random1.jpg);  
  background-size:contain;
  background-repeat: no-repeat;
}

.box-language:hover{
  height: 10vh;
  width: 10vh;
  margin: 10% 0 0 0;
}

.rotate-animation{
  animation: rotate 0.4s forwards;
  transform-origin: center;
}

@keyframes rotate {
    0% { transform: rotate(0deg); } 


    100% { transform: rotate(360deg);}

  }

.drop_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0 0 0 / 64%);
    width: 50%;
    height: 100%;
    transition: 0.5s;

}

.drop_item{

}

.main_item {
    height:9vw;
    width: 6vw;
    position: relative;
    display: flex;
    align-items: flex-start; 
    justify-content: center;
    padding: 0 0 0 0;
}

.main_item svg{
    height: 6vw;
    width: 6vw;
    transform: rotate(0deg);
    transition: 0.5s all;
    clip-path: url(#lozengeClip);
    
}

#lozengeClip {
  shape-outside: polygon(20% 0, 50% 100%, 80% 0, 50% 0);
}

.main_item svg:hover{
    transform: rotate(180deg);
}

.main_item::before{
    content: '';
    display: inline-flex;
    position: absolute;
    height: -webkit-fill-available;
    width: 100%;
    top: 55%;
    background-image: url(src/assets/others/ornament_lang.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.project_item{
    height: 5vw;
    width: 5vw;
    background-image: url(/src/assets/others/project_node.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
}

.project_item:hover{
     
}



</style>