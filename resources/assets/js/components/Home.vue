<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row text-center">
                <h1>Menus</h1>
            </div>
            <div class="row">
                <router-link :to="{name: 'people'}" class="btn btn-default btn-block text-center"><i class="fa fa-users"></i><br> Peoples</router-link>
                <router-link :to="{name: 'vehicle'}" class="btn btn-default btn-block text-center"><i class="fa fa-car"></i><br> Vehicles</router-link>
                <router-link :to="{name: 'starship'}" class="btn btn-default btn-block text-center"><i class="fa fa-fighter-jet"></i><br> Starships</router-link>    
                <router-link :to="{name: 'film'}" class="btn btn-default btn-block text-center"><i class="fa fa-film"></i><br> Films</router-link>    
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: 'This is Home Component'
            }
        }
    }
</script>