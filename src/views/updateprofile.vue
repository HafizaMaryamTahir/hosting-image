<template>

  <v-app>
    <v-content >
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center" mt="5">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row>
                     <v-col cols="12" md="4" class="blue accent-3">
                       <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-2">Hello everyone!</h1>
                        <h5 class="text-center">
                          update your profile and enjoy the servics
                        </h5>
                      </v-card-text>
                     
                   
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-centre
                            display-1
                            blue--text
                            text--accent-2
                          "
                        >
                          update your profile
                        </h1>
                        <h4 class="text-centre mt-6">
                          wanna update your profile please enter the information
                        </h4>
                       <v-form>
                          <v-text-field
                            label="name"
                            name="name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            label="age"
                            name="age"
                            prepend-icon="mdi-account"
                            type="numeric"
                            color="blue accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="blue accent-3"
                            disabled
                          />
                          <v-text-field
                            id="password"
                            label="password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="blue accent-3"
                          />
                          <v-file-input
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Pick an picture"
                            prepend-icon="mdi-camera"
                            label="upload a picture"
                              color="blue accent-3"
                          ></v-file-input>
                        </v-form>
                      </v-card-text>
                       <div class="text-center mt-3">
                        <v-btn rounded color="blue accent-3" dark
                          >submit</v-btn
                        >
                      </div>
                    </v-col>

                  </v-row>
           
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'signin',
  data: () => ({
       rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
  
  }),
  
};
</script>

