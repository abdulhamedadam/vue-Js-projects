<template>
<div class="m-auto">
 <h1 class="text-2xl my-2 text-center">Vue Calender</h1>
 <!-- {{ startDay() }} -->
 <section  class="flex mx-4 justify-between">
 <h2 class="font-bold ">{{currentMonthName}}</h2>
 <h2 class="font-bold ">{{currentYear}}</h2>
 </section>
 <section  class="flex mx-2">
    <p class="text-center" style="width:14.28%" v-for="day in days" :key="day">{{day}}</p>
 </section>
 <section  class="flex flex-wrap my-2 mx-2">
    <p class=" text-center" style="width:14.28%" v-for="num in startDay()" :key="num"></p>
    <p class=" text-center" style="width:14.28%" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)" >{{num}}</p>
   
 </section>
 <section class="flex justify-between my-4">
    <button class="px-2 border rounded" v-on:click="prev">Prev</button>
    <button class="px-2 border rounded" v-on:click="next">Next</button>
 </section>
</div>

</template>

<script>
    export default{
        computed:{
          
          currentMonthName()
          {
            return new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month: "long"});
          }
        },

        data()
        {
            return{
                currentDate:new Date().getUTCDate(),
                currentMonth:new Date().getMonth(),
                currentYear:new Date().getFullYear(),
                days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            };
        },

        methods:{
            daysInMonth(){
              return new Date(this.currentYear,this.currentMonth+1,0).getDate();
            },

            startDay()
            {
                return new Date(this.currentYear,this.currentMonth-14,0).getDay();
            },
            next()
            {
                if(this.currentMonth === 11)
                {
                  this.currentMonth=0;
                  this.currentYear++;
                }else{
                  this.currentMonth++;
                }
                
            },
            prev()
            {
                if(this.currentMonth === 0)
                {
                  this.currentMonth=11;
                  this.currentYear--;
                }else{
                 this.currentMonth--;
                }
                
            },
            currentDateClass(num)
            {
                const  calenderFullDate=new Date(this.currentYear,this.currentMonth,num).toDateString();
                const  currentFullDate =new Date().toDateString()
                return calenderFullDate === currentFullDate ? 'text-yellow-500' : '';
            },

        }



    }
</script>