<template>
    <v-container>
  <v-form
    ref="form"
  >
    <v-text-field
      :counter="35"
      label="Name"
      required
      dark
      v-model="name"
    ></v-text-field>

    <v-textarea
        dark
        name="Description"
        label="Enter Description"
        v-model="description"
    >
    </v-textarea>

    <v-text-field
      label="Price"
      required
      dark
      v-model="price"
    ></v-text-field>

<v-row class="mb-2">
     <v-file-input
    label="Image"
    show-size
    dark
    v-model="image"
    @click="importTxt"
    ></v-file-input>

</v-row>
   

    <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      Submit
    </v-btn>
  </v-form>
  </v-container>
</template>

<script>
export default {
    props: ['product'],

    data () {
        return {
            name: this.product.name,
            description: this.product.description,
            price: this.product.price,
            image: this.product.image
        }
    },

    methods: {
        submit () {
            axios.put('/api/products/' + this.product.id, {
                name: this.name,
                description: this.description,
                price: this.price,
                image: this.image,
            }).then(response => {
             this.$router.push('products')
            })
        },

          importTxt() {
      console.log(this.image)
            if (!this.image) {this.data = "No File Chosen"}
            var reader = new FileReader();
            
            // Use the javascript reader object to load the contents
            // of the file in the v-model prop
            reader.onload = () => {
                this.image = reader.result;
            }
    }
    }

}
</script>

<style>

</style>