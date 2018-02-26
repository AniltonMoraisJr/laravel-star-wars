<template>
   <div class="panel">
       <div class="panel-body">
           <ul class="pager">
                <li class="previous"><router-link :to="{ name: 'vehicle' }"><span aria-hidden="true">&larr;</span> Back to vehicles</router-link></li>
            </ul>
           <div v-if="url != null">
                <div class="row text-center">
                    <h1>Details</h1>
                    <h3>{{ vehicle.name }}</h3>
                </div>
                <div class="row">
                    <div class="panel with-nav-tabs panel-default">
                        <div class="panel-heading">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#tab1default" data-toggle="tab">Properties</a></li>                                   
                                    <li><a href="#tab4default" data-toggle="tab">Films</a></li>                                    
                                </ul>
                        </div>
                        <div class="panel-body">
                            <div class="tab-content">
                                <div class="tab-pane fade in active" id="tab1default">
                                    <p><strong>Name:</strong> {{ vehicle.name }}</p>
                                    <p><strong>Model:</strong> {{ vehicle.model }}</p>
                                    <p><strong>Manufacturer:</strong> {{ vehicle.manufacturer }}</p>
                                    <p><strong>Crew:</strong> {{ vehicle.crew }}</p>
                                    <p><strong>Cargo Capacity:</strong> {{ vehicle.cargo_capacity }}</p>
                                    <p><strong>Consumables:</strong> {{ vehicle.consumables }}</p>
                                    <p><strong>Lenght</strong> {{ vehicle.length }}</p>
                                    <p><strong>Max Atmosphering Speed:</strong> {{ vehicle.max_atmosphering_speed }}</p>
                                    <p><strong>Passengers:</strong> {{ vehicle.passengers }}</p>
                                    <p><strong>Vehicle Class:</strong> {{ vehicle.vehicle_class }}</p>
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
                                                <td><router-link :to="{name: 'vehicledetail', params: { url: vehicle.url } }" class="btn btn-primary">Detail</router-link></td>
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
                vehicle: [],
                films: []
            }
        },
        mounted() {
            if (this.url != null) {
                
                this.getVehicle(this.url);
            }
        },
        methods: {
            getVehicle(url){
                let sUrl = url;
                this.axios.get(sUrl)
                    .then((response) => {                        
                        this.vehicle = response.data;
                        this.vehicle.films.forEach((element) => {
                            this.getvehicleFilms(element);
                        });
                    })
            },
            getVehicleFilms(url) {
                this.axios.get(url)
                    .then((response) => {
                        this.films.push(response.data);
                    });                
            }
        }
    }
</script>