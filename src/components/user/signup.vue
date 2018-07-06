<template>
    <div>
        <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSignUp">
                  <v-text-field required prepend-icon="person" name="login"  label="Login" type="text" v-model="user"> </v-text-field>
                  <v-text-field required prepend-icon="mail" name="email" label="email" type="email" v-model="email" :rules="[checkemail]"> </v-text-field>
                  <v-text-field required prepend-icon="lock" name="password"  label="Password" id="password" type="password" v-model="pass"></v-text-field>
                  <v-text-field required prepend-icon="lock" name="confirmpassword"  label="Confirm Password" id="confirmpassword" type="password" v-model="cpass" :rules="[comparePasswords]"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSignUp" >Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      user: '',
      pass: '',
      cpass: '',
      email: ''
    }
  },
  methods: {
    onSignUp () {
      let data = { 'user': this.user, 'pass': this.pass }
      console.log(data)
      this.$store.dispatch('signUserUp', data)
    }
  },
  computed: {
    comparePasswords () {
      return this.pass !== this.cpass ? 'Passwords no Match' : null
    },
    checkemail () {
      this.$store.dispatch('checkUser', { 'user': this.user })
      return 'Correo electronico usado'
    }
  }
}
</script>

<style>
</style>

