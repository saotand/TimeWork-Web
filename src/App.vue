<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in menu" :key="i" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <!--
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>

      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>-->
      <v-toolbar-title>
        <v-list-tile-avatar>
          <img src="@/assets/ologo.png">
        </v-list-tile-avatar> {{title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat fab centered small="" @click.stop="rightDrawer = !rightDrawer">
          <img src="@/assets/ologo.png" width="100%">
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer temporary clipped :right="right" v-model="rightDrawer" app >
      <v-list>

        <v-list-tile v-for="(itemr, i) in menur" :key="i" :to="itemr.url">
          <v-list-tile-action>
            <v-icon>{{itemr.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{itemr.title}}</v-list-tile-title>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'TimeWork',
      clipped: true,
      drawer: true,
      fixed: false,
      menu: [
        {
          icon: 'dashboard',
          title: 'Escritorio',
          url: '/'
        },
        {
          icon: 'star',
          title: 'Mis Asignaciones',
          url: '/tasks'
        },
        {
          icon: 'chat_bubble',
          title: 'Comentarios',
          url: '/comment'
        }
      ],
      menur: [
        {
          title: 'My Perfil',
          url: '/profile',
          icon: 'face'
        }
      ]
    }
  },
  mounted () {
  },
  computed: {

  },
  methods: {
  }

}
</script>


<style>
div.a.v-list__title--active{
  color: #808080;
}
</style>
