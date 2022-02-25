<template>
<div>
    <h3>Oscillator</h3>
  <div class="oscillator">
    <p
      :class="{selected: type === osc}"
      @click="oscillatorChange(osc)"
      v-for="(osc, idx) in oscillatorTypes" :key="idx"
    >{{osc}}
    </p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Oscillator',
  props: ['type'],
  data () {
    return {
      oscillatorTypes: [
        'sine', 'square', 'triangle', 'sawtooth'
      ]
    }
  },
  methods: {
    oscillatorChange(osc) {
      this.$emit('oscillator-change-event', osc)
    }
  }
}
</script>

<style scoped>
p {
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  display: block;
}
p.selected {
  color: #005aed;
}
</style>
