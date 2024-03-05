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
     <div id="pin-switch" class="container-switcher " :class="'switch-set-us' ">
      <article class="switchers content-1 div1"> 
        heeeyyy
      </article>

      <article class="switchers content-2 div2"> 
         something here
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