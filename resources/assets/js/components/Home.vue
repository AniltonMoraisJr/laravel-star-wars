<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="row text-center">
                <h1>Menus</h1>
            </div>
            <div class="row">
                <router-link :to="{name: 'people'}" class="btn btn-default btn-block text-center"><i class="fa fa-users"></i><br> People</router-link>
                <!-- <router-link :to="{name: 'people'}" class="col-md-3 col-md-offset-2 btn btn-default text-center"><i class="fa fa-users"></i><br> People</router-link>
                <router-link :to="{name: 'people'}" class="col-md-3 col-md-offset-2 btn btn-default text-center"><i class="fa fa-users"></i><br> People</router-link>                 -->
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