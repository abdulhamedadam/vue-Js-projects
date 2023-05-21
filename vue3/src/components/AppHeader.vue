<template>
 <nav class=" bg-gray-900 text-white py-4 px-6">

  <router-link v-for="item in list" :key="item.to" class=" mr-4" v-bind:to="item.to">{{item.title}}</router-link>
  <button v-if="isLoggedIn" class="mr-4" @click="$emit('open-login-modal')">Login</button>
  <button v-else class="mr-4" @click="logout">Logout</button>


</nav>
</template>

<script>
  import firebase from '../utilities/firebase.js';
    export default{
       props:{"isLoggedIn":Boolean},
      data()
      {
        return{
          list:[
            {title:"Dc Heros",to:"/dc-heros"},
            {title:"Calender",to:"/calender"},
            {title:"Markdown",to:"/markdown"},
            {title:"Slider Carousel",to:"/slider"},
          ],
        };
      },
      methods:{
        logout(){
          firebase
          .auth()
          .signOut()
      
        }
      }


    }
</script>