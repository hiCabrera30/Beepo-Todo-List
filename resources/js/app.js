import { App, plugin } from '@inertiajs/inertia-vue'

import Vue from 'vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
/**
 * Vue SweetAlert 2 usage
 */
const options = {
    confirmButtonColor: '#3b82f6',
    cancelButtonColor: '#d4d4d4',
    cancelTextColor: '#595959'
}
   
Vue.use(VueSweetalert2, options)

Vue.use(plugin)

const el = document.getElementById('app')



new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => import(`./pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el)
