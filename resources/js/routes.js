import Home from './components/Home';
import Categories from './screens/category/index';

export default {
    mode: 'history',
    routes: [
        {
            path:'/admin',
            component: Home
        },

        {
            path:'/admin/categories',
            component: Categories
        },

    ]
}