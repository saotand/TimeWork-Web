<template>
  <v-container>

        <app-loading :loading="loading"></app-loading>


    <v-layout row v-if="success">
      <v-flex xs12 sm6 offset-sm3>
        <app-success @dismissed="onDismissed" :text="success">
        </app-success>
      </v-flex>
    </v-layout>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error">
        </app-alert>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="cardsilver elevation-16" hover raised>
            <v-card-text>
                <v-container>
                  <form @submit.prevent="onSignUp" autocomplete="off">

                    <v-layout row>
                      <v-flex xs12><center>
                        <img style="width:80%" src="@/assets/gmtlogo-1024x310.png">
                        <h2>Timework</h2></center>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="user" label="Usuario" id="user" v-model="user" type="text" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="email" label="Correo electrónico" id="email" v-model="email" type="email" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="pass" label="Contraseña" id="pass" v-model="pass" type="password" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                    <v-flex xs12>
                        <v-text-field name="cpass" label="Confirmar Contraseña" id="cpass" v-model="cpass" :rules="[comparePasswords]" type="password"></v-text-field>
                    </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs6 class="mr-1">
                          <v-btn block class="primary" centered type="submit" :disabled="validForm">Registrame</v-btn>
                        </v-flex>
                        <v-flex xs6 class="ml-1">
                          <v-btn to="/signin" block class="success">Iniciar Sesion</v-btn>
                        </v-flex>
                    </v-layout>

                  </form>
              </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as easings from 'vuetify/es5/util/easing-patterns'
export default {
  data () {
    return {
      user: 'userdemo',
      email: 'email@demo.com',
      pass: 'd0708aca',
      cpass: 'd0708aca',
      name: 'nombredemo',
      last: 'apellidodemo',
      birth: '2018-01-01'
    }
  },
  computed: {
    comparePasswords () {
      return ((this.pass !== this.cpass)) ? 'Las Contraseñas no coinciden' : null
    },
    validForm () {
      return !(this.user !== '' && this.email !== '' && this.pass !== '' && this.cpass !== '' && this.name !== '' && this.email !== '' && this.comparePasswords === null)
    },
    loading () {
      return this.$store.getters.loading
    },
    success () {
      return this.$store.getters.success
    },
    error () {
      return this.$store.getters.error
    },
    user () {
      return this.$store.getters.account
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
        alert('redirected')
      }
    },
    error () {
      this.$vuetify.goTo(0, {duration: 1000, offset: 0, easing: 'easeInOutCubic'})
    },
    success () {
      this.$vuetify.goTo(0, {duration: 1000, offset: 0, easing: 'easeInOutCubic'})
    }
  },
  methods: {
    onSignUp () {
      let newuserdata = { user: this.user, email: this.email, pass: this.pass, name: this.name, last: this.last, birth: this.birth }
      this.$store.dispatch('signUserUp', newuserdata)
    },
    onDismissed () {
      console.log('dismissed Alert')
      this.$store.dispatch('clearError')
    },
    onDismisseds () {
      console.log('dismissed Alert success')
      this.$store.dispatch('clearSuccess')
    }
  },
  created () {
    if (this.user) {
      this.$store.dispatch('showIDE')
      this.$router.push('/')
    } else {
      this.$store.dispatch('hideIDE')
    }
  }
}
</script>

