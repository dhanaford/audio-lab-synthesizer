<template>
<div>
  <div class="envelope">
      <h3>Envelope</h3>
      <div @mouseup="attackChange" class="knob">
        <circle-slider
          v-model="customAttack"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#fff"
        />
        <p>Attack</p>
      </div>
      <div @mouseup="releaseChange" class="knob">
        <circle-slider
          v-model="customRelease"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#fff"
        />
        <p>Release</p>
      </div>
      <div @mouseup="sustainChange" class="knob">
        <circle-slider
          v-model="customSustain"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#fff"
        />
        <p>Sustain</p>
      </div>
      <div @mouseup="decayChange" class="knob">
        <circle-slider
          v-model="customDecay"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#fff"
        />
        <p>Decay</p>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Envelope',
  props: [],
  data () {
    return {
      customAttack: 10,
      customDecay: 10,
      customSustain: 35,
      customRelease: 10
    }
  },
  methods: {
    attackChange() {
      this.$emit('attack-change-event', this.customAttack)
    },
    decayChange() {
      this.$emit('decay-change-event', this.customDecay)
    },
    sustainChange() {
      this.$emit('sustain-change-event', this.customSustain)
    },
    releaseChange() {
      this.$emit('release-change-event', this.customRelease)
    }
  }
}
</script>

<style scoped>
.envelope {
  margin-right: 58px;
}
.knob {
  display: inline-table;
  width: 11%;
}
.row {
  display: flex;
}
</style>
