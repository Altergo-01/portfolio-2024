<script>
 
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
                   <div class="box-language">

                   </div>

               </div>

               <div class="project_item drop_item"></div>
               <div class="project_item drop_item"></div>
               <div class="project_item drop_item"></div>
               <div class="project_item drop_item"></div>
               <div class="project_item drop_item"></div>
           </div>
    
  


</template>
 
<style>

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
   height: 10vh;
   background-image: url(/src/assets/project_wallpaper/random1.jpg);
   width: 10vh;

   clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
   transform: rotate(45deg);
}

.drop_container{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: rgba(116, 116, 116, 0.64);
    
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
   justify-content: center;
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