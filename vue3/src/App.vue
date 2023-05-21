<template>
<AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true"/>
<div class="w-full flex">
  <router-view></router-view>

<!-- <DcHeros /> -->
<!-- <Calender/> -->
</div>
<LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
</template>



<script>
  import AppHeader from './components/AppHeader.vue';
  import LoginModal from './components/LoginModal.vue';
  import firebase from './utilities/firebase.js';
  import Calender from './pages/Calender.vue';
  import Home from './pages/Home.vue';
  //import DcHeros from './pages/DcHeros.vue';


  export default{

    mounted(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user)
        {
           this.isloggedIn=true;
           this.authUser=user;
        }else{
            this.isloggedIn=false;
            this.authUser={};
        }
      });
    },
    
      data()
      {
        return{
          
          isLoginOpen:false,
          isLoggedIn:false,
          authUser:{},
        };
      },
  //  components:{ AppHeader,DcHeros ,Calender},
    components:{ AppHeader,Calender,LoginModal},
    
      


  }
</script>
