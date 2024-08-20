<template>
  <div class="form">
    <div class="form__header">
      <span>
        <slot name="form-header" />
      </span>
    </div>
    <div class="form__content">
      <slot name="form-content" />
    </div>
    <div class="form__footer">
      <slot name="form-footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-container',
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 360px;
  padding: 50px;

  background: $secondary-color;
  border-radius: 3px;

  margin-top: 100px;

  &__header {
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }

  &__content {
    width: 100%;
    padding: 10px 0;
  }

  &__footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
}
</style>
