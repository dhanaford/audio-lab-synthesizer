<template>
  <div
      class="key"
      v-bind:class="{
        'black-key': pianoKey.type === 'black',
        'white-key': pianoKey.type === 'white',
      }"
      @mousedown="keyClick"
    ></div>
</template>

<script>
// import Piano from "./components/Piano.vue";

export default {
  name: 'Key',
  props: ["pianoKey"],
  data () {
    return {
    }
  },
  methods: {
    keyClick() {
      // send a custom event with the piano key that was clicked
      this.$emit("key-click-event", this.pianoKey);
    }
  }
}
</script>

<style scoped>
.black-key {
  width: 35px;
  height: 140px;
  background-color: #272343;
  z-index: 1;
  position: absolute;
  margin-top: -234px;
  margin-left: -18px;
}
.white-key {
  width: 55px;
  height: 234px;
  background-color: #ffffff;
}
.key {
  display: inline-block;
  /* cursor: pointer; */
  padding: 10%;
  border-radius: 4px;
  /* box-shadow: -0.3rem 0.3rem 0 0 #bae8e8; */
  border: 1px solid #ccc;
}
.key:active {
  box-shadow: inset .3em -.3em .5em #ccc;
}
</style>
