<template>
    <v-alert fixed fab transition="scale-transition" :value="true" type="error" dismissible @input="onClose" centered>
        {{text}}
    </v-alert>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>
