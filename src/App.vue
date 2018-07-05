<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i" :to="item.url"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" class="" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
     <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer><v-toolbar-items>
       <v-btn v-show="rightMenu" flat @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>

          <v-btn flat v-show="!rightMenu" to="/signin">Sign In</v-btn>
          <v-btn flat v-show="!rightMenu" to="/signup">Sign Up</v-btn>
          </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <!--  <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>-->
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i" :to="item.url"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>

          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" ></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'dashboard',
          title: 'Inicio',
          url: '/'
        },
        {
          icon: 'list',
          title: 'Tareas',
          url: '/task'
        },
        {
          icon: 'chrome_reader_mode',
          title: 'Trabajos',
          url: '/working'
        }
      ],
      miniVariant: false,
      right: true,
      rightMenu: false,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style>
a div.list__tile__content div.list__tile__title{
  color: grey !important;
}
a.list__tile--active div.list__tile__content div.list__tile__title{
  color:#1972d2 !important;

}
a.list__tile--active{
  background-color: #cccccc !important;
}
</style>