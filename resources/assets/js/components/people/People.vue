<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <h1>People - {{ peoples_count }} found</h1>
            </div>
            <br><br>
            <div class="row" v-if="peoples.length > 0">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Gender</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="people in peoples">
                            <td>{{ people.name }}</td>
                            <td>{{ people.birth_year }}</td>
                            <td>{{ people.gender }}</td>
                            <td><router-link :to="{name: 'peopledetail', params: { url: people.url } }" class="btn btn-primary">Detail</router-link></td>
                        </tr>
                    </tbody>                    
                </table>
                <nav aria-label="...">
                    <ul class="pager">
                        <li class="previous"><a v-on:click="getPeople(pagination_previous)" v-if="pagination_previous != null"><span aria-hidden="true">&larr;</span> Previous</a></li>
                        <li class="next"><a v-on:click="getPeople(pagination_next)" v-if="pagination_next != null" >Next <span aria-hidden="true">&rarr;</span></a></li>
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
                peoples_count: 0,
                peoples: [],
                pagination_next: '',
                pagination_previous: '',
            }
        },
        mounted() {
            this.getPeople('');
        },
        methods: {
            getPeople(url){
                let sUrl = url != '' ? url : 'https://swapi.co/api/people';
                this.axios.get(sUrl)
                    .then((response) => {
                        this.pagination_next = response.data.next;
                        this.pagination_previous = response.data.previous;
                        this.peoples_count = response.data.count;
                        this.peoples = response.data.results;                        
                    })
            }
        }
    }
</script>