<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
                <h1>Vehicle - {{ vehicles_count }} found</h1>
            </div>
            <br><br>
            <div class="row" v-if="vehicles.length > 0">
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
                <nav aria-label="...">
                    <ul class="pager">
                        <li class="previous"><a v-on:click="getVehicles(pagination_previous)" v-if="pagination_previous != null"><span aria-hidden="true">&larr;</span> Previous</a></li>
                        <li class="next"><a v-on:click="getVehicles(pagination_next)" v-if="pagination_next != null" >Next <span aria-hidden="true">&rarr;</span></a></li>
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
                vehicles_count: 0,
                vehicles: [],
                pagination_next: '',
                pagination_previous: '',
            }
        },
        mounted() {
            this.getVehicles('');
        },
        methods: {
            getVehicles(url){
                let sUrl = url != '' ? url : 'https://swapi.co/api/vehicles';
                this.axios.get(sUrl)
                    .then((response) => {
                        this.pagination_next = response.data.next;
                        this.pagination_previous = response.data.previous;
                        this.vehicles_count = response.data.count;
                        this.vehicles = response.data.results;                        
                    })
            }
        }
    }
</script>