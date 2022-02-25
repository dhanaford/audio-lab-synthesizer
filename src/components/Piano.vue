<template>
  <div>
    <select
      v-if="midiInputs.length"
    >
      <option
        v-for="(input, idx) in midiInputs" :key="idx"
      >{{input}}
    </option>
    </select>
    <br />
  <div class="table">
    <div class="grid">
      <div class="synth-type">
        <button
          @click="switchSynth(synth.name, idx)"
          v-for="(synth, idx) in synthTypes" :key="idx"
          :class="{selected: synthTypes[idx].isSelected}"
        >{{ synth.name }}
      </button>
      </div>
      <div class="oscillator">
        <Oscillator
        v-bind:type="currentOscillator"
        v-on:oscillator-change-event="handleOscillatorChange"
      ></Oscillator>
      </div>
      <div class="envelope">
        <Envelope
            v-on:attack-change-event="handleAttackChange"
            v-on:decay-change-event="handleDecayChange"
            v-on:sustain-change-event="handleSustainChange"
            v-on:release-change-event="handleReleaseChange"
          />
      </div>
    </div>

    <div class="grid">
      <Effects
        v-on:chorus-change-event="handleChorusChange"
        v-on:reeverb-change-event="handleReeverbChange"
        v-on:distortion-change-event="handleDistortionChange"
        v-on:phaser-change-event="handlePhaserChange"
        v-on:bitcrusher-change-event="handleBitCrusherChange"
      />
    </div>
  </div>
    <div
      class="key-container"
      v-for="key in keys" :key="key.id"
    >
      <Key
        v-bind:pianoKey="key"
        v-on:key-click-event="handleKeyClick"
      />
    </div>
  </div>
</template>

<script>
import * as Tone from 'tone'
import VueCircleSlider from 'vue-circle-slider'
import Key from './Key.vue'
import Envelope from './Envelope.vue'
import Oscillator from './Oscillator.vue'
import Effects from './Effects.vue'

export default {
  name: 'Piano',
  components: { VueCircleSlider, Key, Envelope, Oscillator, Effects },
  data () {
    return {
      synthTypes: [
        {
          name: 'synth', 
          isSelected: true
        },
        {
          name: 'amSynth',
          isSelected: false
        },
        {
          name: 'monoSynth',
          isSelected: false
        },
        {
          name: 'fmSynth',
          isSelected: false
        }
      ],
      midiInputs: [],
      selectedSynth: null,
      synth: new Tone.Synth({
        oscillator: {
          type: 'sine',
        }
      }),
      effects: [
        new Tone.Freeverb(0.1, 3000),
        new Tone.Chorus(),
        new Tone.Distortion(1),
        new Tone.Phaser(),
        new Tone.BitCrusher(1)
      ],
      reeverb: new Tone.Freeverb(0.1, 3000),
      chorus: new Tone.Chorus(0, 2, 1),
      distortion: new Tone.Distortion(1.5),
      phaser: new Tone.Phaser(0.5, 3, 350),
      bitCrusher: new Tone.BitCrusher(4),
      amSynth: new Tone.AMSynth(),
      fmSynth: new Tone.FMSynth(),
      monoSynth: new Tone.MonoSynth(),
      synthTwo: new Tone.Synth(),
      gain: null,
      keys: [
        {
          id: 1,
          keyName: "C",
          note: 48,
          position: 4,
          type: "white",
          character: "A",
        },
        {
          id: 2,
          keyName: "C#",
          note: 49,
          position: 4,
          type: "black",
          character: "W",
        },
        {
          id: 3,
          keyName: "D",
          note: 50,
          position: 4,
          type: "white",
          character: "S",
        },
        {
          id: 4,
          keyName: "D#",
          note: 51,
          position: 4,
          type: "black",
          character: "E",
        },
        {
          id: 5,
          keyName: "E",
          note: 52,
          position: 4,
          type: "white",
          character: "D",
        },
        {
          id: 6,
          keyName: "F",
          note: 53,
          position: 4,
          type: "white",
          character: "F",
        },
        {
          id: 7,
          keyName: "F#",
          note: 54,
          position: 4,
          type: "black",
          character: "T",
        },
        {
          id: 8,
          keyName: "G",
          note: 55,
          position: 4,
          type: "white",
          character: "G",
        },
        {
          id: 9,
          keyName: "G#",
          note: 56,
          position: 4,
          type: "black",
          character: "Y",
        },
        {
          id: 10,
          keyName: "A",
          note: 57,
          position: 4,
          type: "white",
          character: "H",
        },
        {
          id: 11,
          keyName: "A#",
          note: 58,
          position: 4,
          type: "black",
          character: "U",
        },
        {
          id: 12,
          keyName: "B",
          note: 59,
          position: 4,
          type: "white",
          character: "J",
        },
                {
          id: 13,
          keyName: "C",
          note: 60,
          position: 5,
          type: "white",
          character: "A",
        },
        {
          id: 14,
          keyName: "C#",
          note: 61,
          position: 5,
          type: "black",
          character: "W",
        },
        {
          id: 15,
          keyName: "D",
          note: 62,
          position: 5,
          type: "white",
          character: "S",
        },
        {
          id: 16,
          keyName: "D#",
          note: 63,
          position: 5,
          type: "black",
          character: "E",
        },
        {
          id: 17,
          keyName: "E",
          note: 64,
          position: 5,
          type: "white",
          character: "D",
        },
        {
          id: 18,
          keyName: "F",
          note: 65,
          position: 5,
          type: "white",
          character: "F",
        },
        {
          id: 19,
          keyName: "F#",
          note: 66,
          position: 5,
          type: "black",
          character: "T",
        },
        {
          id: 20,
          keyName: "G",
          note: 67,
          position: 5,
          type: "white",
          character: "G",
        },
        {
          id: 21,
          keyName: "G#",
          note: 68,
          position: 5,
          type: "black",
          character: "Y",
        },
        {
          id: 22,
          keyName: "A",
          note: 69,
          position: 5,
          type: "white",
          character: "H",
        },
        {
          id: 23,
          keyName: "A#",
          note: 70,
          position: 5,
          type: "black",
          character: "U",
        },
        {
          id: 24,
          keyName: "B",
          note: 71,
          position: 5,
          type: "white",
          character: "J",
        }
      ]
    }
  },
  computed: {
    currentOscillator() {
      if (this.selectedSynth) {
        return this.selectedSynth.oscillator.type
      }
    }
  },
  mounted() {
    this.configureSynth(this.synth)
    navigator.requestMIDIAccess()
      .then(this.onMidiSuccess, this.onMidiFailure)
  },
  methods: {
    onMidiSuccess(midiAccess) {
      for (let input of midiAccess.inputs.values()) {
        input.onmidimessage = this.getMidiMessage;
      }
      for (var entry of midiAccess.inputs) {
        let input = entry[1]
        this.midiInputs.push(input.name)
      }
    },
    onMidiFailure() {
      console.log('Could not access your MIDI devices.');
    },
    getMidiMessage(message) {
      let command = message.data[0];
      let note = message.data[1];
      let velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

    // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
      switch (command) {
          case 144: // noteOn
              if (velocity > 0) {
                  this.noteOn(note);
              } else {
                  this.noteOff(note);
              }
              break;
          case 128: // noteOff
              this.noteOff(note);
              break;
      }
    },
    noteOn(note) {
      this.selectedSynth.toDestination()
      let key = this.keys.filter(val => val.note === note)
      this.selectedSynth.triggerAttackRelease(key[0].keyName + '4', '8n')
    },
    noteOff(note) {
      console.log('note: ' + note)
    },
    switchSynth(synth, idx) {
      this.synthTypes[idx].isSelected = !this.synthTypes.map(val => val.isSelected = false)
      this.synthTypes[idx].isSelected = true
      this.selectedSynth = this[synth]
      this.configureSynth(this.selectedSynth)
    },  
    configureSynth(synth) {
      this.selectedSynth = synth
      this.effects.forEach((val, idx) => {
        this.selectedSynth.connect(val)
        if (idx === 1) { // Chorus needs a start method
          val.toDestination().start()
        } else {
          val.toDestination()
        }
      })
    },
    connectEffects(effect) {
      this.selectedSynth.connect(effect)
    },
    handleKeyClick(key) {
      this.selectedSynth.toDestination()
      this.selectedSynth.triggerAttackRelease(key.keyName + key.position, '8n')
    },
    handleAttackChange(customAtack) {
      this.selectedSynth.envelope.attack = customAtack / 100
    },
    handleDecayChange(customDecay) {
      this.selectedSynth.envelope.decay = customDecay / 100
    },
    handleSustainChange(customSustain) {
      this.selectedSynth.envelope.sustain = customSustain / 100
    },
    handleReleaseChange(customRelease) {
      this.selectedSynth.envelope.release = customRelease / 100
    },
    handleChorusChange(customChorus) {
        let effects = {
          frequency: customChorus
        }
        this.effects[1].set(effects)
    },
    handleReeverbChange(customReeverb) {
      let effects = {
        roomSize: customReeverb / 100
      }
      this.effects[0].set(effects)

    },
    handleBitCrusherChange(customBitCrusher) {
      let effects = {
        bits: customBitCrusher
      }
      this.effects[4].set(effects)
    },
    handleDistortionChange(customDistortion) {
      let effects = {
        distortion: customDistortion
      }
      this.effects[2].set(effects)

    },
    handlePhaserChange(customPhaser) {
      let effects = {
        frequency: customPhaser
      }
      this.effects[3].set(effects)
    },
    handleOscillatorChange(oscillator) {
      this.selectedSynth.oscillator.type = oscillator
    }
  }
}
</script>

<style scoped>
.key-container {
  padding: 1px !important;
  margin: 0px !important;
  max-width: 50% !important;
  flex-grow: unset !important;
  display: inline-block;
  position: relative;
}
.oscillator {
  width: 25%;
  float: left;
}
.envelope {
  width: 121%;
}
.selected {
  background: orange;
}
button {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 35px;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  border: none;
  background: #555;
}
</style>
