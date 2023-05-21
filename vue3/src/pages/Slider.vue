<template>
 <div class="flex flex-wrap w-full relative">
  
   <div   v-for="( color,index ) in sliders" :key="color"  class="w-full absolute"  >
    <transition name="fade">
      <img class="w-full"  v-if="currentSlide ===index" :class="color" style="height:350px" :src="sliders[currentSlide]"/>
    </transition>
   </div>
   <div class="w-full" style="height:340px">

      <div class="absolute bottom-0 flex justify-center w-full">
        <div 
        v-for="(slider,index ) in sliders"  
        :key="slider" 
        @click="makeActive(index)"
        :class="currentSlide === index  ? 'bg-gray-700':'bg-gray-300' "
        class="w-4 h-4 rounded-full bg-black mx-1 cursor-pointer"></div>
         
      </div>
   </div>
   <!-- <div class="my-10 flex w-full">
     <div class="m-auto">

      <transition name="fade">
       <h1 v-if="isTitleShowing" class="text-center" >Slider Sarousel</h1>
      </transition>

      <button @click="isTitleShowing= !isTitleShowing" class="p-2 m-2 rounded border ">Toggle Text</button>
     </div>
   </div> -->
 </div>
</template>

<script>
    export default{

      methods:{
        makeActive(index)
        {
          this.currentSlide = index ;
        }
      },

      data()
      {
        return{
            currentSlide:0,
            interval:"",
            isTitleShowing:true,
           // sliders:['bg-blue-500','bg-yellow-500','bg-teal-500'],
            sliders:['../src/assets/1.jpg','../src/assets/2.jpg','../src/assets/3.jpg'],
        };
      },


      mounted(){
        this.interval=setInterval(()=>{
            this.currentSlide = this.currentSlide ===2 ? 0 : this.currentSlide+1;
            if (this.currentSlide ===2)
            {
               this.currentSlide =0;
            }else{

            this.currentSlide++;   
            }
        },5000);
      },

      beforeUnmount(){
            clearInterval(this.interval)
      }



    }
</script>
<style>

  .fade-enter-active,
  .fade-leave-active {
    transition : all 1s ease;
  }
  .fade-enter-from{
       opacity : 0 ;
    transform:translateX(-100%);
  }
  .fade-leave-to {
    opacity : 0 ;
    transform:translateX(100%);
  }

</style>