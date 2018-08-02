<template>
  <v-container>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
                <v-container>
                  <form @submit.prevent="onSignUp()">

                    <v-layout row>
                      <v-flex xs12><center>
                        <img style="width:80%" src="@/assets/gmtlogo-1024x310.png">
                        <h2>Timework</h2></center>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="usuario" label="Usuario" id="user" v-model="email" type="text" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="pass" label="Contraseña" id="pass" v-model="pass" type="password" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-btn class="primary" centered type="submit">Entrar</v-btn>
                            <v-btn class="primary" left centered type="submit">Registrate</v-btn>
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
export default {
  data () {
    return {
      user: '',
      pass: '',
      cpass: ''
    }
  },
  methods: {
    onSignUp () {
      // Vuex
      console.log({ user: this.user, pass: this.pass, cpass: this.cpass })
    }
  },
  mounted () {
    this.$parent.toolbarapp = false
  }
}
</script>
