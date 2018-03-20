<template>
   <div class="panel">
       <div class="panel-body">
           <ul class="pager">
                <li class="previous"><router-link :to="{ name: 'people' }"><span aria-hidden="true">&larr;</span> Back to Peoples</router-link></li>
            </ul>
           <div v-if="url != null">
                <div class="row text-center">
                    <h1>Details</h1>
                    <h3>{{ people.name }}</h3>
                </div>
                <div class="row">
                    <div class="panel with-nav-tabs panel-default">
                        <div class="panel-heading">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#tab1default" data-toggle="tab">Properties</a></li>
                                    <li><a href="#tab2default" data-toggle="tab">Starship</a></li>
                                    <li><a href="#tab3default" data-toggle="tab">Vehicles</a></li>
                                    <li><a href="#tab4default" data-toggle="tab">Films</a></li>                                    
                                </ul>
                        </div>
                        <div class="panel-body">
                            <div class="tab-content">
                                <div class="tab-pane fade in active" id="tab1default">
                                    <p><strong>Name:</strong> {{ people.name }}</p>
                                    <p><strong>Specie:</strong> {{ specie }}</p>
                                    <p><strong>Gender:</strong> {{ people.gender }}</p>
                                    <p><strong>Birth Year:</strong> {{ people.birth_year }}</p>
                                    <p><strong>Hair Color:</strong> {{ people.hair_color }}</p>
                                    <p><strong>Height:</strong> {{ people.height }}</p>
                                    <p><strong>Mass</strong> {{ people.mass }}</p>
                                    <p><strong>Hair Color:</strong> {{ people.hair_color }}</p>

                                </div>
                                <div class="tab-pane fade" id="tab2default">
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
                                </div>
                                <div class="tab-pane fade" id="tab3default">
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
                                            <tr v-for="vehicle in vehicles">
                                                <td>{{ vehicle.name }}</td>
                                                <td>{{ vehicle.model }}</td>
                                                <td>{{ vehicle.manufacturer }}</td>
                                                <td><router-link :to="{name: 'vehicledetail', params: { url: vehicle.url } }" class="btn btn-primary">Detail</router-link></td>
                                            </tr>
                                        </tbody>                    
                                    </table>
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
                people: [],
                specie: "",
                starships: [],
                vehicles: [],
                films: []
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
                        this.getPeopleSpecie(this.people.species[0]);
                        this.people.starships.forEach((element) => {
                            this.getPeopleStarships(element);
                        });
                        this.people.films.forEach((element) => {
                            this.getPeopleFilms(element);
                        });
                        this.people.vehicles.forEach((element) => {
                            this.getPeopleVehicles(element);
                        })
                    })
            },
            getPeopleSpecie(url) {
                this.axios.get(url)
                    .then((res) => {
                        this.specie = res.data.name;
                        //console.log(res);
                    })
            },
            getPeopleStarships(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.starships.push(response.data);
                    });                
            },
            getPeopleVehicles(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.vehicles.push(response.data);
                    });                
            },
            getPeopleFilms(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.films.push(response.data);
                    });                
            }
        }
    }
</script>