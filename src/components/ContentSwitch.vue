<script>
 
 
 
export default {

    props: ['activeButton'],
    components: {
 
    },
    data() {
        return {
          switch_class:'switch-set-1',
          componentRender : this.activeButton,
 
 
        }
    },
    methods: {
        
    },
    mounted() {
    
       
  
    },

}


</script>


<template>
 

    <div class="container-switcher">
      <div> <slot name="left"></slot> </div>
      <div> <slot name="right"></slot> </div>
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
  