<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <back-home></back-home>
            </div>
            <div class="row">
                <h1>Films - {{ films_count }} found</h1>
            </div>
            <br><br>
            <div class="row" v-if="films.length > 0">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Episode</th>
                            <th>Director</th>
                            <th>Release Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="film in films">
                            <td>{{ film.title }}</td>
                            <td>{{ film.episode_id }}</td>
                            <td>{{ film.director }}</td>
                            <td>{{ film.release_date }}</td>
                            <td><router-link :to="{name: 'filmdetail', params: { url: film.url } }" class="btn btn-primary">Detail</router-link></td>
                        </tr>
                    </tbody>                    
                </table>
                <nav aria-label="...">
                    <ul class="pager">
                        <li class="previous"><a v-on:click="getFilms(pagination_previous)" v-if="pagination_previous != null"><span aria-hidden="true">&larr;</span> Previous</a></li>
                        <li class="next"><a v-on:click="getFilms(pagination_next)" v-if="pagination_next != null" >Next <span aria-hidden="true">&rarr;</span></a></li>
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
                films_count: 0,
                films: [],
                pagination_next: '',
                pagination_previous: '',
            }
        },
        mounted() {
            this.getFilms('');
        },
        methods: {
            getFilms(url){
                let sUrl = url != '' ? url : 'https://swapi.co/api/films';
                this.axios.get(sUrl)
                    .then((response) => {
                        this.pagination_next = response.data.next;
                        this.pagination_previous = response.data.previous;
                        this.films_count = response.data.count;
                        this.films = response.data.results;                        
                    })
            }
        }
    }
</script>