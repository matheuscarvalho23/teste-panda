<template>
  <div class="register">
    <form-container>
      <template #form-header>
        <h1>Crie sua conta</h1>
      </template>

      <template #form-content>
        <form-input
          v-model="form.name"
          :input-type="'name'"
          :label="'Nome'"
          :mandatoryType="'required'"
          :messages="{
            required: 'O nome é obrigatório.',
          }"
        />

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
          :label="'Cadastrar'"
          @handleClick="handleRegister"
        />

        <router-link to="/login" class="login">
          Realizar login
        </router-link>
      </template>
    </form-container>
  </div>
</template>

<script>
import FormContainer from '@/components/FormContainer.vue'
import FormButton from '@/components/FormButton.vue'
import FormInput from '@/components/FormInput.vue'
import reqresApi from '@/services/reqresApi'

export default {
  name: 'register-page',
  components: {
    FormContainer,
    FormInput,
    FormButton
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async handleRegister () {
      try {
        await reqresApi.createUser(this.form)

        this.$toast.success('Cadastro realizado com sucesso!')

        this.$router.push('/login')
      } catch (error) {
        console.error('Register failed:', error);
        this.$toast.error('Ocorreu um erro ao realizar cadastro !')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h1 {
    text-decoration: underline;
  }

  .login {
    color: $primary-color-light;
  }
}
</style>
