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
            Order
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
          v-for="category in categories"
          :key="category.id"
        >
          <td class="text-center">
            <div v-if="category.image">
              <img :src="url+'/categories/'+category.image" alt="" style="height:100px;width:100px">
            </div>
            <div v-else>
              <img src="https://www.logodesignlove.com/images/monograms/tesla-logo-01.jpg" alt="" style="height:100px;width:100px">
            </div>
            </td>
          <td class="text-center">{{ category.name }}</td>
          <td class="text-center">{{ category.order }}</td>
          <td class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                large
                color="cyan"
                v-on:click="() => $router.push({name: 'EditCategory', params: {category}})"
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
                v-on:click="deleteCategory(category.id)"
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
        categories: [],
        url: window.location.origin
      }
    },

    mounted () {
        this.getCategories()
    },

    methods: {
        getCategories () {
            axios.get('/api/categories').then(response => {
                if(response.status >= 200 && response.status < 300) {
                    this.categories = response.data.categories
                }
            })
        },

        deleteCategory(id) {
          axios.delete('/api/categories/'+id).then(response => {
                if(response.status >= 200 && response.status < 300) {
                    this.getCategories()
                }
            })
        }
    }
  }
</script>

<style>

</style>