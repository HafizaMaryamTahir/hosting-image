<template>
  <v-app>
  
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="true">
                  <v-row>
                    <v-col cols="12" md="4" class="blue accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-2">Hello everyone!</h1>
                        <h5 class="text-center">
                          Enter your personal details strat jounery with us!
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-centre
                            display-2
                            blue--text
                            text--accent-3
                          "
                        >
                          Sign in to Exponent
                        </h1>
                        <h4 class="text-centre mt-4">
                          Ensure your email for sign in
                        </h4>
                        <v-form ref="form"  lazy-validation>
                          <v-text-field
                            label="email"
                            name="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="blue accent-3"
                            v-model="userData.email"
                            :rules="emailRule"
                            required
                          />
                          <v-text-field
                            id="password"
                            label="password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="blue accent-3"
                            v-model="userData.password"
                            :rules="passwordRule"
                            required
                          />

                          <p
                            class="text-right mt-4"
                            style="text-underline: none"
                          >
                            <router-link to="forgot">
                              Forgot your password ?
                            </router-link>
                          </p>
                        </v-form>

                        <div class=" text-center mt-3">
                          <v-btn rounded color="white--text blue accent-3" @click="signIn"
                            >sign in</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                    <!-- side transition -->
                  </v-row>
                </v-window-item>
                <!-- sign up page -->
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-centre display-1">Welcome Back!</h1>
                        <h5 class="text-centre">
                          To keep contected with us please login with your
                          personal info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--" 
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-centre
                            display-2
                            blue--text
                            text--accent-2
                          "
                        >
                          Create Account
                        </h1>
                        <h4 class="text-centre mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form>
                          <v-text-field
                            label="name"
                            name="name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="blue accent-3"
                            v-model="userData.name"
                            :rules="nameRule"
                            required
                          />
                          <v-text-field
                            label="age"
                            name="age"
                            prepend-icon="mdi-account"
                            type="numeric"
                            color="blue accent-3"
                            v-model="userData.age"
                            :rules="ageRule"
                            required
                          />
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="blue accent-3"
                            v-model="userData.email"
                            :rules="emailRule"
                            required
                          />
                          <v-text-field
                            
                            label="password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="blue accent-3"
                            v-model="userData.password"
                            :rules="passwordRule"
                            required
                          />
                          <v-file-input
                                  
                           
                           v-on:change="storeImg"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Pick an picture"
                            prepend-icon="mdi-camera"
                            label="upload a picture"
                            color="blue accent-3"
                              required
                            
                          ></v-file-input>  
                        </v-form>
                       <div class="text-center mt-3">
                          <v-btn rounded color="blue accent-3" dark @click="singUp"
                            >sign up</v-btn
                          >
                        </div>
                      </v-card-text>
                       
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
       <v-snackbar top color="red" :value="getSnackbarStutes" timeout="5000">
       {{getSnackbarErrorMsg}}
    </v-snackbar>
  
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import {
  nameRule,
  emailRule,
  passwordRule,
  ageRule,
  // imageRule,
} from "../views/vaildations/vaildations";
export default {
  name: "signin",
  data: () => ({
    step: 1,
    snackbar:false,
    passwordRule: passwordRule,
   emailRule: emailRule,
    nameRule: nameRule,
    ageRule: ageRule,
    // imageRule: imageRule,
    userData: {
      name: "",
      age: "",
      email: "",
      password: "",
      profile_pic: "",
    }
  }),
  methods:{
     storeImg(event) {

      let vm = this;

      const reader = new FileReader();

      reader.addEventListener(

        "load",

        function () {

          vm.userData.profile_pic = reader.result;

        },

        false

      );

      reader.readAsDataURL(event);

    },
    singUp(){
      this.$store.dispatch("loadUser",this.userData)
      this.$store.dispatch("updateSnackBarStatus");
    },signIn(){
      this.$store.dispatch("loginUser",this.userData)
      this.$store.dispatch("updateSnackBarStatus");
    },
     computed:{
        ...mapGetters(['getSnackbarStutes']),
        ...mapGetters(['getSnackbarErrorMsg'])
    }
  }
};
</script>
