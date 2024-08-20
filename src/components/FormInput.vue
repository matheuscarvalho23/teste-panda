<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <ValidationProvider
      :name="label"
      :rules="mandatoryType"
      :custom-messages="messages"
      mode="lazy"
      v-slot="{ errors }"
    >
      <input
        :type="inputType"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <span class="form-input__label-errors">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    inputType: {
      type: String,
      default: 'text',
      required: false
    },
    value: {
      type: [Number, String],
      default: '',
      required: true
    },
    label: {
      type: String,
      default: '',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    mandatoryType: {
      type: String,
      default: ''
    },
    messages: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.form-input {
  margin-top: 15px;
  label {
    font-weight: 600;
  }

  input {
    margin-top: 5px;
    width: 98%;
    height: 35px;
    background: transparent;
    border: 1px $primary-color-light solid;
    border-radius: 4px;

    color: #fff;
    font-size: 22px;
  }

  &__errors {
    border: 1px solid $danger-color !important;
  }

  &__label-errors {
    color: $danger-color;
    font-size: 14px;
  }
}
</style>