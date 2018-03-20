<template>
   <div class="panel">
       <div class="panel-body">
           <ul class="pager">
                <li class="previous"><router-link :to="{ name: 'starship' }"><span aria-hidden="true">&larr;</span> Back to starships</router-link></li>
            </ul>
           <div v-if="url != null">
                <div class="row text-center">
                    <h1>Details</h1>
                    <h3>{{ starship.name }}</h3>
                </div>
                <div class="row">
                    <div class="panel with-nav-tabs panel-default">
                        <div class="panel-heading">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#tab1default" data-toggle="tab">Properties</a></li>                                   
                                    <li><a href="#tab4default" data-toggle="tab">Films</a></li>                                    
                                    <li><a href="#tab5default" data-toggle="tab">Pilots</a></li>  
                                </ul>
                        </div>
                        <div class="panel-body">
                            <div class="tab-content">
                                <div class="tab-pane fade in active" id="tab1default">
                                    <p><strong>Name:</strong> {{ starship.name }}</p>
                                    <p><strong>Model:</strong> {{ starship.model }}</p>
                                    <p><strong>Manufacturer:</strong> {{ starship.manufacturer }}</p>
                                    <p><strong>Crew:</strong> {{ starship.crew }}</p>
                                    <p><strong>Cargo Capacity:</strong> {{ starship.cargo_capacity }}</p>
                                    <p><strong>Consumables:</strong> {{ starship.consumables }}</p>
                                    <p><strong>Lenght</strong> {{ starship.length }}</p>
                                    <p><strong>Max Atmosphering Speed:</strong> {{ starship.max_atmosphering_speed }}</p>
                                    <p><strong>Passengers:</strong> {{ starship.passengers }}</p>
                                    <p><strong>Starship Class:</strong> {{ starship.starship_class }}</p>
                                </div>                                
                                <div class="tab-pane fade" id="tab4default">
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
                                                <td><router-link :to="{name: 'starshipdetail', params: { url: starship.url } }" class="btn btn-primary">Detail</router-link></td>
                                            </tr>
                                        </tbody>                    
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="tab5default">
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
                                </div>
                            </div>
                        </div>
                    </div>                    
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
                starship: [],
                peoples: [],
                films: []
            }
        },
        mounted() {
            if (this.url != null) {
                
                this.getstarship(this.url);
            }
        },
        methods: {
            getstarship(url){
                let sUrl = url;
                this.axios.get(sUrl)
                    .then((response) => {                        
                        this.starship = response.data;
                        this.starship.films.forEach((element) => {
                            this.getStarshipFilms(element);
                        });
                        this.starship.peoples.forEach((element) => {
                            this.getStarshipPilots(element);
                        })
                    })
            },
            getStarshipFilms(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.films.push(response.data);
                    });                
            },
            getStarshipPilots(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.peoples.push(response.data);
                    });                
            }
        }
    }
</script>