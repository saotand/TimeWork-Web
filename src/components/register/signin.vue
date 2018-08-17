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
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3 class="mt-4">
          <v-card class="cardsilver elevation-16">
            <v-card-text>
                <v-container>
                  <form @submit.prevent="onSignUp()" autocomplete="off">
                    <v-layout row>
                      <v-flex xs12><center>
                        <img style="width:80%" src="@/assets/gmtlogo-1024x310.png">
                        <h2>Timework</h2></center>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="usuario" label="Usuario" id="user" v-model="uuser" type="text" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field name="pass" label="Contraseña" id="pass" v-model="upass" type="password" required></v-text-field>
                      </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs6 class="mr-1">
                            <v-btn :disabled="loading" :loading="loading" block class="success" centered type="submit">
                              Entrar
                              <span slot="loader" class="custom-loader">
                                <v-icon light>cached</v-icon>
                              </span>
                            </v-btn>
                        </v-flex>
                        <v-flex xs6 class="ml-1">
                            <v-btn block class="primary" to="/signup" left centered type="submit">Registrate</v-btn>
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
      uuser: 'admin',
      upass: 'tvxq1aca'
    }
  },
  computed: {
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
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignUp () {
      // Vuex
      let userdata = { user: this.uuser, pass: this.upass }
      this.$store.dispatch('signUserIn', userdata)
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  mounted () {},
  created () {
    if (this.user) {
      this.$store.dispatch('showIDE')
    } else {
      this.$store.dispatch('hideIDE')
    }
  }
}
</script>
