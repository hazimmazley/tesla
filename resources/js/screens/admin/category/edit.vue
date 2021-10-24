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

    <v-text-field
      label="Order"
      required
      dark
      v-model="order"
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
    props: ['category'],

    data () {
        return {
            name: this.category.name,
            order: this.category.order,
            image: this.category.image
        }
    },

    methods: {
        submit () {
            axios.put('/api/categories/' + this.category.id, {
                name: this.name,
                order: this.order,
                image: this.image,
            }).then(response => {
             this.$router.push('categories')
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