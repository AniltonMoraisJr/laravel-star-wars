import Home from './components/Home.vue';
import Peoples from './components/people/Peoples.vue';
import PeopleDetail from './components/people/PeopleDetail.vue';
import Vehicle from './components/vehicle/Vehicles.vue';
import VehicleDetail from './components/vehicle/VehicleDetail.vue';
import Starship from './components/starship/Starships.vue';
import StarshipDetail from './components/starship/StarshipDetail.vue';
import Film from './components/film/Films.vue';
import FilmDetail from './components/film/FilmDetail.vue';

export const routes = [
    {path: '/home', component: Home, name: 'home'},
    {path: '/home/people', component: Peoples, name: 'people'},
    {path: '/home/people/detail', component: PeopleDetail, name: 'peopledetail', props: true},
    {path: '/home/vehicle', component: Vehicle, name: 'vehicle'},
    {path: '/home/vehicle/detail', component: VehicleDetail, name: 'vehicledetail', props: true},
    {path: '/home/starship', component: Starship, name: 'starship'},
    {path: '/home/starship/detail', component: StarshipDetail, name: 'starshipdetail', props: true},
    {path: '/home/film', component: Film, name: 'film'},
    {path: '/home/film/detail', component: FilmDetail, name: 'filmdetail', props: true}
];