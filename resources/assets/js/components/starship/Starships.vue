<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <back-home></back-home>
            </div>
            <div class="row">
                <h1>Starship - {{ starships_count }} found</h1>
            </div>
            <br><br>
            <div class="row" v-if="starships.length > 0">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="starship in starships">
                            <td>{{ starship.name }}</td>
                            <td>{{ starship.model }}</td>
                            <td>{{ starship.manufacturer }}</td>
                            <td><router-link :to="{name: 'starshipdetail', params: { url: starship.url } }" class="btn btn-primary">Detail</router-link></td>
                        </tr>
                    </tbody>                    
                </table>
                <nav aria-label="...">
                    <ul class="pager">
                        <li class="previous"><a v-on:click="getStarships(pagination_previous)" v-if="pagination_previous != null"><span aria-hidden="true">&larr;</span> Previous</a></li>
                        <li class="next"><a v-on:click="getStarships(pagination_next)" v-if="pagination_next != null" >Next <span aria-hidden="true">&rarr;</span></a></li>
                    </ul>
                </nav>
            </div>
            <p v-else>No data found.</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                starships_count: 0,
                starships: [],
                pagination_next: '',
                pagination_previous: '',
            }
        },
        mounted() {
            this.getStarships('');
        },
        methods: {
            getStarships(url){
                let sUrl = url != '' ? url : 'https://swapi.co/api/starships';
                this.axios.get(sUrl)
                    .then((response) => {
                        this.pagination_next = response.data.next;
                        this.pagination_previous = response.data.previous;
                        this.starships_count = response.data.count;
                        this.starships = response.data.results;                        
                    })
            }
        }
    }
</script>