<template>
  <v-app>



<router-link to="/forgot"></router-link>
<router-link to="/updateprofile"></router-link>
<router-link to="uploadimage"></router-link>
<router-link to="/signin"></router-link>
      <router-view/>
 
  </v-app>
</template>

<script>

export default {
  name: 'App',
  

  data: () => ({
    //
  }),
};
</script>
