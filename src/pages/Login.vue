<template>
  <div class="login">
    <form-container>
      <template #form-header>
        <h1>Seja bem vindo (a)</h1>
      </template>

      <template #form-content>
        <form-input
          v-model="form.email"
          :input-type="'email'"
          :label="'E-mail'"
          :mandatoryType="'required|email'"
          :messages="{
            required: 'O email é obrigatório.',
            email: 'Por favor, insira um email válido.'
          }"
        />

        <form-input
          v-model="form.password"
          :input-type="'password'"
          :label="'Senha'"
          :mandatoryType="'required'"
          :messages="{
            required: 'Senha obrigatória.',
          }"
        />
      </template>

      <template #form-footer>
        <form-button
          :label="'Entrar'"
          @handleClick="handleLogin"
        />

        <router-link to="/register" class="register">
          Criar conta
        </router-link>
      </template>
    </form-container>
  </div>
</template>

<script>
import FormContainer from '@/components/FormContainer.vue'
import FormButton from '@/components/FormButton.vue'
import FormInput from '@/components/FormInput.vue'
import { mapActions } from 'vuex'

export default {
  name: 'login-page',
  components: {
    FormContainer,
    FormInput,
    FormButton
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions(['login']),
    async handleLogin () {
      try {
        await this.login({ email: this.form.email, password: this.form.password })
        this.$toast.success('Login realizado com sucesso!')
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error);
        this.$toast.error('E-mail ou senha incorretos !')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  h1 {
    text-decoration: underline;
  }

  .register {
    color: $primary-color-light;
  }
}
</style>