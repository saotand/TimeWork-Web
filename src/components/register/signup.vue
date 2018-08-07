<template>
  <v-container>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
                <v-container>
                  <form @submit.prevent="onSignUp">

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
                        <v-flex xs6 class="mr1">
                          <v-btn block class="primary" centered type="submit" :disabled="validForm">Registrame</v-btn>
                        </v-flex>
                        <v-flex xs6 class="ml1">
                          <v-btn block class="success">Iniciar Sesion</v-btn>
                        </v-flex>
                    </v-layout>

                  </form>
              </v-container>

              {{ this.validForm }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

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
      return this.pass !== this.cpass ? 'Las Contraseñas no coinciden' : null
    },
    validForm () {
      return !(this.user !== '' && this.email !== '' && this.pass !== '' && this.cpass !== '' && this.name !== '' && this.email !== '')
    }
  },
  methods: {
    onSignUp () {
      this.$store.dispatch('signUserUp', { user: this.user, email: this.email, pass: this.pass, name: this.name, last: this.last, birth: this.birth })
      // Vuex
      // console.log({ user: this.user, pass:this.pass,cpass: this.cpass})
    }
  }
}
</script>
