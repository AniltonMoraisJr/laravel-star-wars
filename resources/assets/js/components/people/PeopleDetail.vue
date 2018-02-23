<template>
   <div class="panel">
       <div class="panel-body">
           <ul class="pager">
                <li class="previous"><router-link :to="{ name: 'people' }"><span aria-hidden="true">&larr;</span> Back to Peoples</router-link></li>
            </ul>
           <div v-if="url != null">
                <div class="row text-center">
                    <h1>Details</h1>
                </div>
                <div class="row">
                    <p><strong>Name</strong> {{ people.name }}</p>
                </div>
           </div>
           <p v-else>No detail passed</p>
       </div>
   </div>
</template>
<script>
    export default {
        props: ['url'],
        data() {
            return {
                people: [],
            }
        },
        mounted() {
            if (this.url != null) {
                
                this.getPeople(this.url);
            }
        },
        methods: {
            getPeople(url){
                let sUrl = url != '' ? url : 'https://swapi.co/api/people';
                this.axios.get(sUrl)
                    .then((response) => {                        
                        this.people = response.data;
                        console.log(response);
                    })
            }
        }
    }
</script>