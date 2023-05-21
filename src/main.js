const template=
`<div>
<h1>
    {{ name }}
</h1>
</div>`;
const data=function data()
{
    return{
        title:'vue3 toturial updated',
        name:'ahhahahahah'
    };
};

const app={data,template};

 Vue.createApp(app).mount('#vue-app');
  