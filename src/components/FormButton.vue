<template>
  <div class="form-button">
    <button type="button" @click="$emit('handleClick')">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'form-button',
  props: {
    label: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.form-button {
  width: 100%;
  margin-top: 35px;

  button {
    width: 100%;
    background: $primary-color-light;

    height: 45px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>