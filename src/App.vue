<template>
  <div id="app">
    <div class="synth">
      <Piano></Piano>
    </div>
  </div>
</template>

<script>
import Piano from "./components/Piano.vue";

export default {
  name: 'app',
  components: { Piano },
  data () {
    return {
      synth: null,
      gain: null
    }
  }
}
</script>

<style>
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  color: white;
}
.synth {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table {
    display: grid;
    /* grid-template-columns: 1fr 1fr 80%;  */
    grid-template-columns: 1fr;
    max-width: 844;
    box-shadow: 0px 2px 5px 3px #1f1e1e80;
    width: 892px;
}

.table > div.grid {
  margin: 1px;
  background: #2a2a2a;
  padding: 5px;
}

.table > div.grid:nth-child(3n+2) {
  /* background: lemonchiffon; */
}

.table > div.grid:nth-child(3n+3) {
  /* background: palegreen; */
}

</style>
