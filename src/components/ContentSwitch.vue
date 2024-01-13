<script>
import gsap from 'gsap';

export default {
    data() {
        return {
        }
    },
    methods: {
            
    },

}


</script>


<template>
    <div class="container-switcher">
      <div class="switchers content-1">CONTENT 1</div>
      <div class="switchers content-2">CONTENT 2</div>
    </div>
</template>
  
<style>


.container-switcher{
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}


@media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
}
</style>
  