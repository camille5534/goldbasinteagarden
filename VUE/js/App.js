import Nav from './compents/nav.js';
export default {
    data(){
        return {
            title: 'Hellow Vue',
            price: 30
        }
    },
    components:{
        'app-nav':Nav
    }
}