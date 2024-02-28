<script>
 
import { onMounted, ref } from 'vue';
 
 


export default {

     
    components: {

    },
    data() {
        return {
 
        }
    },
    methods: {
        
    },
    mounted() {
      
       
  
    },

}


</script>


<template>

<div class="drop_container">
    <div class="main_item drop_item">
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id=""></clipPath>
            <path id="lozengeClip" d="M68.0088 142.962L1.77295 76.7263V68.0088L68.0088 1.77295H76.7263L142.962 68.0088V76.7263L76.7263 142.962H68.0088Z" stroke="white" stroke-width="2"/>
            <image href="@/assets/project_wallpaper/random1.jpg" height="6vw" width="6vw" clip-path="url('#lozengeClip')"/>
        </svg>
    </div>

    <div class="project_item drop_item"></div>
    <div class="project_item drop_item"></div>
    <div class="project_item drop_item"></div>
    <div class="project_item drop_item"></div>
    <div class="project_item drop_item"></div>
</div>

</template>
  
<style>

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
    height: 8vw;
    width: 6vw;
    position: relative;
    display: flex;
    align-items: flex-start; 
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
    height: 100%;
    width: 100%;
    top: 55%;
    background-image: url(src/assets/others/ornament_lang.png);
    background-repeat: no-repeat;
    background-size: contain;
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