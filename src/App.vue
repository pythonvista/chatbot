<template>
  <v-app class="">
    <v-main class="">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import GoogleAuth from "google-auth-library";

// const auth = new GoogleAuth();
// const token = await auth.getAccessToken()
// console.log(token)

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style scoped>

</style>
