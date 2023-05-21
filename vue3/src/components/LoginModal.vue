<template>

  <section 
  @click="close"
  class="z-20 w-screen h-screen bg-gray-300 fixed top-0 opacity-50">
  </section>
  <div class="absolute inset-0">
    <div class="flex h-full">
       <div class="z-30 m-auto  bg-gray-900 p-4 rounded shadow w-1/3">
       
         <h1 class="text-2xl my-3 text-center text-white">Login</h1>
         <form class="p-4 my-4" @submit.prevent="submit">
            <div class="my-4 ">
               <label class="text-white">Email or Username</label>
               <input v-bind="email"  class="rounded shadow p-2 w-full" placeholder="Enter your Email or Username"/>
            </div>
            <div class="my-4 ">
               <label class="text-white">Password</label>
               <input v-bind="password" class=" rounded shadow p-2 w-full" type="password" placeholder="Enter your password"/>
            </div>
            <div class="my-8 text-center">
               <button type="submit" class=" px-8 py-2 bg-white rounded shadow hover:bg-black hover:text-white"><span v-if="!isLoading">Login</span><span v-else>⌛</span></button>
            </div>
         </form>
        
       </div>
       
    </div>
  </div>

</template>

<script>
  import firebase from '../utilities/firebase.js';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  const auth = getAuth();
    export default{

      data(){
        return{
         
            email:'',
            password:'',
            isLoading:false,
          
        }

      },

    methods:{
  
      submit()
      { 
      this.isLoading=true;
      signInWithEmailAndPassword(auth,this.email,this.password)
       .then(() => {
        this.email='';
        this.password='';
        this.isLoading=false;
        this.close();
       })
      .catch((error) => {
        console.log(error);
        this.isLoading=false;
       });
      },
      close(){
       this.$emit('close-login');
      }
    }

    }
</script>