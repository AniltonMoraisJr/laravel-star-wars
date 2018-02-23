import Home from './components/Home.vue';
import People from './components/people/People.vue';
import PeopleDetail from './components/people/PeopleDetail.vue';

export const routes = [
    {path: '/home', component: Home, name: 'home'},
    {path: '/home/people', component: People, name: 'people'},
    {path: '/home/people/detail', component: PeopleDetail, name: 'peopledetail', props: true}
];