<template>
<div>
  <div class="envelope">
      <h3>Effects</h3>
      <div @mouseup="chorusChange" class="knob">
        <circle-slider
          v-model="customChorus"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          :min="1"
          :max="1000"
          :step-size="10"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>Chorus</p>
      </div>
      <div @mouseup="reeverbChange" class="knob">
        <circle-slider
          v-model="customReeverb"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>Reeberb</p>
      </div>
      <!-- <div @mouseup="delayChange" class="knob">
        <circle-slider
          v-model="customDelay"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>Delay</p>
      </div> -->
      <div @mouseup="distortionChange" class="knob">
        <circle-slider
          v-model="customDistortion"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          :min="0"
          :max="100"
          :step-size=".1"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>Distortion</p>
      </div>
      <div @mouseup="phaserChange" class="knob">
        <circle-slider
          v-model="customPhaser"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          :min="0"
          :max="100"
          :step-size=".1"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>Phaser</p>
      </div>
      <div @mouseup="bitcrusherChange" class="knob">
        <circle-slider
          v-model="customBitCrusher"
          :circle-width="4"
          :progress-width="6"
          :knob-radius="6"
          :side="60"
          :min="1"
          :max="8"
          :step-size="1"
          circle-color="#0342a6"
          progress-color="#005aed"
          knob-color="#272343"
        />
        <p>BitCrusher</p>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Effects',
  props: [],
  data () {
    return {
      customChorus: 1,
      customReeverb: 1,
      customDistortion: 0,
      customPhaser: 0,
      customBitCrusher: 1,
      customTremolo: 1
    }
  },
  methods: {
    chorusChange() {
      this.$emit('chorus-change-event', this.customChorus)
    },
    reeverbChange() {
      this.$emit('reeverb-change-event', this.customReeverb)
    },
    delayChange() {
      this.$emit('delay-change-event', this.customDelay)
    },
    distortionChange() {
      this.$emit('distortion-change-event', this.customDistortion)
    },
    phaserChange() {
      this.$emit('phaser-change-event', this.customPhaser)
    },
    bitcrusherChange() {
      this.$emit('bitcrusher-change-event', this.customBitCrusher)
    }
  }
}
</script>

<style scoped>
.knob {
  display: inline-table;
  width: 19%;
}
.row {
  display: flex;
}

</style>
