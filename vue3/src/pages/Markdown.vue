<template>
  <div class="flex flex-wrap w-full">
   <h1 class="w-full text-center mb-3 text-2xl font-bold ">MarkDown App</h1>
  <section class="flex m-auto w-10/12 h-screen">
    <article class="w-1/2 border">
    <textarea class="w-full h-full p-2" :value="text" v-on:input="update">

    </textarea>
    </article>
    <article class="w-1/2 border bg-gray-100 p-2" v-html="markedText"></article>
  </section>
  </div>
</template>

<script>
    import {marked} from 'marked';
    import debounce from '../utilities/mixins/debounce.js';

    export default{
        beforemount()
        {

           console.log('beforemount');
        },

        mounted()
        {
          console.log('mounted');
        },

        beforeunmount()
        {
          console.log('beforeunmount');
        },
        unmounted()
        {
          console.log('unmounted');
        },



        mixins:[debounce],

      data()
      {
        return{
          text:'',
          timeout:"",
        }
      },

      computed:{
        markedText(){
            
            return marked(this.text);
        }
      },

      methods:{
        update(e)
        {
         const task =()=>this.text = e.target.value;
         this.debounce(task,500)

             
        },
        
      }

    }
</script>