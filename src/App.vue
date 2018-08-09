<template>
  <v-app>
    <v-navigation-drawer @input="alert('input')" :mini-variant="ideData.miniVariant" :clipped="ideData.clipped" v-model="ideData.drawer" enable-resize-watcher fixed clipped app>
      <v-list>
        <v-list-tile v-for="(item, i) in menu" :key="i" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar v-if="ideData.toolbarapp" app :clipped-left="ideData.clipped">
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
      <v-toolbar-title>
        <v-toolbar-side-icon big>
          <img src="@/assets/logo_title.png" width="100%">
        </v-toolbar-side-icon> {{ideData.title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat fab centered small="" @click.stop="toggleRightDrawer">
          <img src="@/assets/ologo.png" width="100%">
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
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

      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="ideData.fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
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
      return this.$store.getters.getMenu
    },
    ideData () {
      return this.$store.getters.getIDEdata
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
    }
  }

}
</script>


<style>
.minispace{
  width:30px;
}
</style>
