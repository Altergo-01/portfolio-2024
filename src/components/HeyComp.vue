<script>
 
export default {

     
    components: {

    },
    data() {
        return {
          showImage: true
        }
    },
    methods: {
 
    },
    mounted() {
      

  
    },
  
}


</script>


<template>
  <main class="hey-content">

     
        <div class="img-holder" v-if="showImage" >
          <img src="../assets/project_wallpaper/portraithey.jpg"  alt="" >
        </div>  
       
  
  </main>

</template>
  
<style>


 
/*==== ============ =======*/

.hey-content{
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4rem;
  transition: justify-content 0.4s ease;
}

.img-holder{
  overflow: hidden;
  height: 500px;
 
 
 
}

.img-holder img{
  height: inherit;
}

 

 
</style>