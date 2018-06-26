<template>
  <div class="home">
    <a class="button is-danger" @click="login()">Login With Google</a>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'home',
  methods: mapActions('auth', ['login'])
};
</script>
