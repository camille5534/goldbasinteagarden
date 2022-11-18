import Nav from './compents/nav.js';
import Ft from './compents/footer.js';
export default {
    data(){
        return {
            title: 'Hellow Vue',
            price: 30
        }
    },
    components:{
        'app-nav':Nav,
        'app-footer':Ft
    }
}