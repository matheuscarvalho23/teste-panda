<template>
  <div class="header">
    <div class="header__content">
      <span class="header__user">
        {{ emailLogged }}
      </span>
      <span @click="handleLogout" class="header__logout">
        Sair
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'header-component',
  computed: {
    emailLogged () {
      const emailLogged = localStorage.getItem('emailLogged')

      return emailLogged ?? '-'
    },
  },

  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()

      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: $secondary-color;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  &__content {
    width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }

  &__user {
    font-size: 22px;
    color: #fff;
    font-weight: 700;
  }

  &__logout {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>