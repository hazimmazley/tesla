<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Image
          </th>
          <th class="text-center">
            Name
          </th>
           <th class="text-center">
            Description
          </th>
          <th class="text-center">
            Price
          </th>
          <th class="text-center">
            Edit
          </th>
            <th class="text-center">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td class="text-center">
            <div v-if="product.image">
              <img :src="url+'/products/'+product.image" alt="" style="height:100px;width:100px">
            </div>
            <div v-else>
              <img src="https://www.logodesignlove.com/images/monograms/tesla-logo-01.jpg" alt="" style="height:100px;width:100px">
            </div>
            </td>
          <td class="text-center">{{ product.name }}</td>
          <td class="text-center">{{ product.description }}</td>
          <td class="text-center">{{ product.price }}</td>
          <td class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                large
                color="cyan"
                v-on:click="() => $router.push({name: 'EditProduct', params: {product}})"
                >
                <font-awesome-icon icon="pen" />
                </v-btn>
          </td>
          <td class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                large
                color="red"
                v-on:click="deleteProduct(product.id)"
                >
                <font-awesome-icon icon="trash" />
                </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        products: [],
        url: window.location.origin
      }
    },

    mounted () {
        this.getProducts()
    },

    methods: {
        getProducts () {
            axios.get('/api/products').then(response => {
                if(response.status >= 200 && response.status < 300) {
                    this.products = response.data.products
                }
            })
        },

        deleteProduct(id) {
          axios.delete('/api/products/'+id).then(response => {
                if(response.status >= 200 && response.status < 300) {
                    this.getProducts()
                }
            })
        }
    }
  }
</script>

<style>

</style>