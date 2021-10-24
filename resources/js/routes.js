import Home from './components/Home';
import Categories from './screens/category/index';
import AddCategory from './screens/category/create';
import EditCategory from './screens/category/edit';
import Products from './screens/product/index';
import AddProduct from './screens/product/create';
import EditProduct from './screens/product/edit';


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

    ]
}