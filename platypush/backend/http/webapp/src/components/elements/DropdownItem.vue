<template>
  <div class="row item" :class="itemClass" @click="clicked">
    <div class="col-1 icon" v-if="iconClass">
      <i :class="iconClass" />
    </div>
    <div class="text" :class="{'col-11': iconClass != null}" v-text="text" />
  </div>
</template>

<script>
export default {
  name: "DropdownItem",
  props: {
    iconClass: {
      type: String,
    },

    text: {
      type: String,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    itemClass: {
      type: String,
    }
  },

  methods: {
    clicked(event) {
      this.$parent.$emit('click', event)
      this.$parent.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: .5em .25em;
  cursor: pointer;
  align-items: center;

  &:hover {
    background: $hover-bg;
  }

  &.disabled {
    color: $dropdown-disabled-color;
    cursor: initial;
  }

  .icon {
    margin: 0 .5em;
  }
}
</style>
