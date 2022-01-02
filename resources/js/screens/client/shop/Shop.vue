<template>
  <div style="background-color:white">
      <v-carousel hide-delimiters>
          <v-carousel-item src="https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop">
              <v-row class="fill-height" align="center" justify="center">
                  <div class="display-2 white-text pl-5 pr-5 hidden-sm-only"><strong></strong></div><br>
              </v-row>
          </v-carousel-item>
           <v-carousel-item src="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop">
              <v-row class="fill-height" align="center" justify="center">
                  <div class="display-2 white-text pl-5 pr-5 hidden-sm-only"><strong></strong></div><br>
              </v-row>
          </v-carousel-item>
           <v-carousel-item src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/8/2021/02/14165821/screen_shot_2021-01-28_at_10.40.59_copy-1536x864-1.jpg">
              <v-row class="fill-height" align="center" justify="center">
                  <div class="display-2 white-text pl-5 pr-5 hidden-sm-only"><strong></strong></div><br>
              </v-row>
          </v-carousel-item>
      </v-carousel>

      <div class="pl-4 pr-4 row">
          <div class="col-md-6 col-sm-6 col-xs-12">
              <v-card>
                  <v-img src="" class="white--text align-center" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0.5)" height="400px">
                      <h1 class="text-center font-size">Top Products</h1>
                      <div class="text-center">
                         <v-btn href="" class="white-text" outlined>Buy Now</v-btn>
                      </div>
                  </v-img>
              </v-card>
          </div>
      </div>

    <div class="pl-4 pr-4 row">
          <div class="col-md-6 col-sm-6 col-xs-12">
              <v-card>
                  <v-img src="" class="white--text align-center" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0.5)" height="400px">
                      <h1 class="text-center font-size">Top Products</h1>
                      <div class="text-center">
                         <v-btn href="" class="white-text" outlined>Buy Now</v-btn>
                      </div>
                  </v-img>
              </v-card>
          </div>
      </div>

      <v-container>
          <v-row no-gutters>
              <v-col :cols="12">
                  <v-card-title class="subheading">Our Best Deals</v-card-title>
                  <v-divider></v-divider>
                  <div class="row">
                      <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                          <v-hover v-slot:default="{ hover }" open-delay="240">
                              <v-card :elevation="hover ? 16 : 2">
                                  <v-img class="white--text align-end" height="200px" src="">
                                      <v-card-title>T-Shirts</v-card-title>
                                  </v-img>
                                  <v-card-text class="text--primary text center">
                                      <div>
                                          UP TO 60% OFF
                                      </div>
                                      <div>Dont miss out</div>
                                  </v-card-text>
                                  <div class="text-center">
                                      <v-btn href="" class="ma-2" outlined color="info">Explore</v-btn>
                                  </div>
                              </v-card>
                          </v-hover>
                      </div>

                    <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                          <v-hover v-slot:default="{ hover }" open-delay="240">
                              <v-card :elevation="hover ? 16 : 2">
                                  <v-img class="white--text align-end" height="200px" src="">
                                      <v-card-title>T-Shirts</v-card-title>
                                  </v-img>
                                  <v-card-text class="text--primary text center">
                                      <div>
                                          UP TO 60% OFF
                                      </div>
                                      <div>Dont miss out</div>
                                  </v-card-text>
                                  <div class="text-center">
                                      <v-btn href="" class="ma-2" outlined color="info">Explore</v-btn>
                                  </div>
                              </v-card>
                          </v-hover>
                      </div>

                        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                          <v-hover v-slot:default="{ hover }" open-delay="240">
                              <v-card :elevation="hover ? 16 : 2">
                                  <v-img class="white--text align-end" height="200px" src="">
                                      <v-card-title>T-Shirts</v-card-title>
                                  </v-img>
                                  <v-card-text class="text--primary text center">
                                      <div>
                                          UP TO 60% OFF
                                      </div>
                                      <div>Dont miss out</div>
                                  </v-card-text>
                                  <div class="text-center">
                                      <v-btn href="" class="ma-2" outlined color="info">Explore</v-btn>
                                  </div>
                              </v-card>
                          </v-hover>
                      </div>
    
                  </div>
              </v-col>
          </v-row>
      </v-container>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>