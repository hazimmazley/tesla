import Home from './components/Home';
import HomePage from './screens/client/HomePage'
import Categories from './screens/admin/category/index';
import AddCategory from './screens/admin/category/create';
import EditCategory from './screens/admin/category/edit';
import Products from './screens/admin/product/index';
import AddProduct from './screens/admin/product/create';
import EditProduct from './screens/admin/product/edit';
import Login from './screens/auth/Login';
import Shop from './screens/client/shop/Shop'


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

        {
            path:'/admin/addCategory',
            component: AddCategory
        },

        {
            path:'/admin/editCategory',
            component: EditCategory,
            props: true,
            name: 'EditCategory'
        },

        
        {
            path:'/admin/products',
            component: Products
        },

        {
            path:'/admin/addProduct',
            component: AddProduct
        },

        {
            path:'/admin/editProduct',
            component: EditProduct,
            props: true,
            name: 'EditProduct'
        },

        {
            path: '/home',
            component: HomePage
        },

        {
            path:'/login',
            component:Login,
            name: 'Login'
        },
        
        {
            path:'/shop',
            component:Shop,
            name: 'Shop'
        }

    ]
}