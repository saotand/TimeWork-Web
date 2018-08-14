<template>
<div>
  <div class="text-xs-center">
    <!--
      <v-btn app
      persistent
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="red darken-2"
      @click.stop="dialog = true"
    >
      Start loading
    </v-btn>
    -->
    <v-dialog fixed dark
      v-model="loading"
      hide-overlay
      persistent
      width="300"
      max-width="490"
      class="text-xs-center"
    >
      <v-card class="loading_window"

        dark
      >
        <v-card-text class="text--center">
          <v-icon>query_builder</v-icon>
          <br>
          <h3>Cargando</h3>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
  <div class="overlay" v-if="loading"></div>
  </div>
</template>

<script>
  export default {
    props: {
      loading: String
    },
    data () {
      return {
        dialog: false
      }
    },
    watch: {
      /*
      dialog (val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 4000)
      }
      */
    }
  }
</script>

<style scopped>
.loading_window{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4c4c4c+0,595959+12,666666+25,474747+39,2c2c2c+50,000000+51,111111+60,2b2b2b+76,1c1c1c+91,131313+100;Black+Gloss+%231 */
  background: rgb(76,76,76); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 12%, rgba(102,102,102,1) 25%, rgba(71,71,71,1) 39%, rgba(44,44,44,1) 50%, rgba(0,0,0,1) 51%, rgba(17,17,17,1) 60%, rgba(43,43,43,1) 76%, rgba(28,28,28,1) 91%, rgba(19,19,19,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(0,0,0,1) 51%,rgba(17,17,17,1) 60%,rgba(43,43,43,1) 76%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=0 ); /* IE6-9 */

}

.overlay{
    position: fixed; /* Sit on top of the page content */
    /*display: none;  Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}

</style>
