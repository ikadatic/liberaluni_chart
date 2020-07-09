<template>
  <div class="switch">
    <span class="toggle-title">{{ title }}</span>
    <input
      :id="id"
      :name="name"
      :value="name"
      v-model="toggle"
      @change="updateCheckbox"
      class="toggle toggle-round-flat"
      type="checkbox">
    <label :for="id"></label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: function() {
    return {
      toggle: false
    }
  },
  props: ['id', 'name', 'title'],
  methods: {
    updateCheckbox(e) {
      this.toggle ? this.$store.commit('up', e.target.value) : this.$store.commit('down', e.target.value)
    }
  },
}
</script>

<style lang="scss">
.switch {
  font-size: 18px;
  display: flex;
  padding: 0.5em 0;
}

.toggle-title {
  padding-right: 1em;
  width: 90%;
}

.toggle {
  width: 10%;
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
  + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }
  &.toggle-round-flat {
    + label {
      padding: 0.1em;
      width: 2.5em;
      height: 1.5em;
      background-color: #dddddd;
      border-radius: 1em;
      transition: background 0.4s;
      &::before, &::after {
        display: block;
        position: absolute;
        content: "";
      }
      &::before {
        top: 0.1em;
        left: 0.1em;
        bottom: 0.1em;
        right: 0.1em;
        background-color: #fff;
        border-radius: 1em;
        transition: background 0.4s;
      }
      &::after {
        top: 0.2em;
        left: 0.2em;
        bottom: 0.2em;
        width: 1em;
        background-color: #dddddd;
        border-radius: 1em;
        transition: margin 0.4s, background 0.4s;
      }
    }
    &:checked {
      + label {
        background-color: #8ce196;
        &::after {
          margin-left: 1.1em;
          background-color: #8ce196;
        }
      }
    }
  }
}
</style>
