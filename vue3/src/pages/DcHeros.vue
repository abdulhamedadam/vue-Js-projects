
<template>
  <div class="m-auto ">
  <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
 

  <ul>

    <li class="my-3 flex justify-between" v-for="(hero,index) in dcHeros" v-bind:key="hero.name"> 
      <div>   
        {{ hero.name }}  
      </div>
        <button v-on:click="deleteHero(index)">x</button>
    

    </li>
  </ul>

<form  class="mt-10" v-on:submit.prevent="addHero()">

<input class="border rounded p-2 " v-model="newHero" placeholder="type your hero name" ref="newHeroRef"/>
<button class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add Hero
</button>


</form>
</div>
</template>

<script>
    export default{

      setup(){
       const newHero=""; 
       let dcHeros=[
           {name    :'SuperGirl'},
           {name    :'Flash'},
           {name    :'Arrow'},
           {name    :'Batman'},
           {name    :'Superman'},
            ];
        function deleteHero(index)
        {
      
           dcHeros=dcHeros.filter((hero,i)=>i != index);
        
          
        };    

        return {dcHeros,newHero,deleteHero};    
      },

    computed:{
      herosCount()
      {
       return this.dcHeros.length
      },

    },




    methods:{

      addHero()
      {
        if(this.newHero !=='')
        {

        
        this.dcHeros.unshift({name:this.newHero});
        this.newHero='';
        }
      },

     

    },






    data()
    {
      return{
        isActive:true,
       
      
      };
      

    },
    mounted(){
       this.$refs.newHeroRef.focus();
    }
    
 

    }
</script>