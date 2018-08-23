<template>
  <v-app>
    <span v-if="userIsAuthenticated">
    <v-navigation-drawer :mini-variant="ideData.miniVariant" :clipped="ideData.clipped" v-model="ideData.drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in menu" :key="i" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </span>

    <v-toolbar class="silverbar" v-if="userIsAuthenticated" app :clipped-left="ideData.clipped">
      <v-toolbar-side-icon @click.stop="swDrawer"></v-toolbar-side-icon>
      <div class="minispace">
      <v-btn icon @click.stop="swMinivariant" v-if="ideData.drawer">
        <v-icon v-html="ideData.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      </div>
      <!--
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>

      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>-->
      <router-link to="/" tag="div">
      <v-toolbar-title  >
        <v-toolbar-side-icon big>
          <img src="@/assets/logo_title.png" width="100%">
        </v-toolbar-side-icon> {{ideData.title}}
      </v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-btn flat fab centered small="" @click.stop="toggleRightDrawer">
          <img src="@/assets/ologo.png" width="100%">
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <span v-if="userIsAuthenticated">
    <v-navigation-drawer temporary clipped :right="ideData.right" v-model="ideData.rightDrawer" app >
      <v-list>

        <v-list-tile  @click.stop="toggleRightDrawer">
        <v-list-tile-action>
          <v-btn flat fab centered small="">
              <img src="@/assets/ologo.png" width="100%">
          </v-btn></v-list-tile-action>
          <v-list-tile-title>
          Mi Cuenta
          <v-spacer></v-spacer>&times;
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile v-for="(itemr, i) in ideData.menur" :key="i" :to="itemr.url">
          <v-list-tile-action>
            <v-icon>{{itemr.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{itemr.title}}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Cerrar Sesion</v-list-tile-title>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    </span>
<v-footer height="auto" dark>
    <v-layout justify-center row wrap>
      <v-flex app :fixed="ideData.fixed"  text-xs-center xs12>
        &copy;2018 — <strong>Global Mining Trust</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  <span @SessionExpired="errorSesion($event)"></span>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
  },
  computed: {
    menu () {
      if (this.userIsAuthenticated) {
        console.log(this.user)
        return this.$store.getters.getMenuOnline
      } else {
        return this.$store.getters.getMenu
      }
    },
    ideData () {
      return this.$store.getters.getIDEdata
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    toggleIDE () {
      this.$store.dispatch('toggleIDE')
    },
    swDrawer () {
      this.$store.dispatch('toggleDrawer')
      // drawer = !drawer
    },
    swMinivariant () {
      this.$store.dispatch('toggleMiniVariant')
      // miniVariant = !miniVariant
    },
    toggleRightDrawer () {
      this.$store.dispatch('toggleRDrawer')
    },
    errorSesion (event) {
      alert('event')
    }
  },
  created () {
    // alert('done app.vue')
  }

}
</script>


<style>
  .cardsilver {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#dbd9d9+0,dbd9d9+6,eaeaea+14,dbd9d9+22,8e8e8e+100 */
    background: rgb(219,217,217); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(219,217,217,1) 0%, rgba(219,217,217,1) 6%, rgba(234,234,234,1) 14%, rgba(219,217,217,1) 22%, rgba(142,142,142,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(219,217,217,1) 0%,rgba(219,217,217,1) 6%,rgba(234,234,234,1) 14%,rgba(219,217,217,1) 22%,rgba(142,142,142,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(219,217,217,1) 0%,rgba(219,217,217,1) 6%,rgba(234,234,234,1) 14%,rgba(219,217,217,1) 22%,rgba(142,142,142,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dbd9d9', endColorstr='#8e8e8e',GradientType=0 ); /* IE6-9 */
  }

  .silverbar {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f2f6f8+0,d8e1e7+50,b5c6d0+51,e0eff9+100;Grey+Gloss+%232 */
    background: rgb(242,246,248); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(242,246,248,1) 0%,rgba(216,225,231,1) 50%,rgba(181,198,208,1) 51%,rgba(224,239,249,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(242,246,248,1) 0%,rgba(216,225,231,1) 50%,rgba(181,198,208,1) 51%,rgba(224,239,249,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f6f8', endColorstr='#e0eff9',GradientType=0 ); /* IE6-9 */
  }

  .minispace{
    width:30px;
  }

 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
