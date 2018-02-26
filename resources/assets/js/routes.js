import Home from './components/Home.vue';
import Peoples from './components/people/Peoples.vue';
import PeopleDetail from './components/people/PeopleDetail.vue';
import Vehicle from './components/vehicle/Vehicles.vue';
import VehicleDetail from './components/vehicle/VehicleDetail.vue';

export const routes = [
    {path: '/home', component: Home, name: 'home'},
    {path: '/home/people', component: Peoples, name: 'people'},
    {path: '/home/people/detail', component: PeopleDetail, name: 'peopledetail', props: true},
    {path: '/home/vehicle', component: Vehicle, name: 'vehicle'},
    {path: '/home/vehicle/detail', component: VehicleDetail, name: 'vehicledetail', props: true}
];