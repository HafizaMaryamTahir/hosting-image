<template>
  <v-app>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" mt="5">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="4" class="blue accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-2">Hello everyone!</h1>
                    <h5 class="text-center">
                      Reset your password and enjoy the servics
                    </h5>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-centre display-1 blue--text text--accent-2">
                      forgot password
                    </h1>
                    <h4 class="text-centre mt-6">
                      Ensure your right a good one password
                    </h4>
                    <v-form @submit.prevent="submitHandler" ref="form">
                      <v-text-field
                        label="email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="email"
                        color="blue accent-3"
                        v-model="userdata.email"
                        :rules="emailRule"
                        required
                      />
                      <p
                        class="text-right mt-4 text-decoration: none"
                        style="text-decoration: none"
                      >
                        <router-link to="/signin">
                          Already have an account?
                        </router-link>
                      </p>
                    </v-form>
                  </v-card-text>

                  <div class="text-center mt-3">
                    <v-btn rounded color="blue accent-3" dark @click="reset">
                      send mail</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
  </v-app>
</template>

<script>
import { emailRule } from "../views/vaildations/vaildations";
export default {
  // name: 'signin',
  data() {
    return {
      emailRule: emailRule,
      userdata: {
        email: "",
      },
    };
  },
  methods: {
    reset() {
      alert(this.userdata.email);
      this.$store.dispatch("ForgotData", this.userdata)
     
    },
    submitHandler() {
      if (this.$refs.form.validate()) {
        if (this.getTesting != "") {
          this.$refs.email.focus();
        }

        this.$store.dispatch("ForgotData", this.userdata);

        this.loading = true;

        setTimeout(() => {
          this.loading = false;

          this.snackbar = true;
        }, 3000);
      }
    },
  },
};
</script>

